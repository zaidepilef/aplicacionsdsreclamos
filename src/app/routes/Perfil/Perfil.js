import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';

import PerfilData from './components/PerfilData'
import Spinner from 'constants/Spinner/Spinner'

import { getInstanciaApiPerfil } from 'api/Perfil/perfil'
import { getAccessToken } from 'api/auth';
import { updatePerfil } from 'api/Perfil/perfil'

import { notificationsApi } from 'util/Notifications';

const Perfil = ({ match }) => {

    const token = getAccessToken()

    const [profileData, setProfileData] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getInstanciaApiPerfil(token).then(response => {
            setProfileData(response)
            setLoading(false)
        }).catch(() => {
            console.log("Error");
        })
    }, [token])


    const updatePerfilSubmit = async data => {
        var existerut = false
        await getInstanciaApiPerfil(token).then(response => {
            setProfileData(response)
            if (response.rut !== null) {
                existerut = true
                return
            } else {
                existerut = false
            }
        })
        if (existerut === false) {
            const res = await updatePerfil(token, data)
            if (res.error) {
                notificationsApi('error', res.error)
            } else {
                notificationsApi('success', res.data.message)
            }
        }
        else {
            notificationsApi('error', 'Ya hay registros de rut')
        }
    }

    if (loading) {
        return (
            <div className="col d-flex justify-content-center">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Ver Perfil" />
            <div className="row mb-md-3">
                <div className="col-12">
                    <PerfilData
                        profileData={profileData}
                        setProfileData={setProfileData}
                        updatePerfilSubmit={updatePerfilSubmit}
                    />
                </div>
            </div>
        </div>
    )
}
export default Perfil