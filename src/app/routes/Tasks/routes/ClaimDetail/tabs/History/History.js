import React, { useState, useEffect } from 'react'

import TablaHistoria from './components/TablaHistoria'

import { notificationsApi } from 'util/Notifications';
import { getHistory } from 'api/Tareas/historia'
import { getAccessToken } from 'api/auth';


const History = ({id_instancia}) => {

    const [historys, setHistory] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const token = getAccessToken()

    useEffect(() => {
        getHistory(token, id_instancia).then(response => {
            if (response.status !== 200 && response.data) {
                notificationsApi("error", response.data)
                setError(true)
                return
            }
            setHistory(response)
            setLoading(false)
        })
    }, [token, id_instancia])

    return (
        <div className="row">
            <div className="col-12">
                <div className="jr-card">
                    <TablaHistoria
                        historys={historys}
                        loading={loading}
                        error={error}
                    />
                </div>
            </div>
        </div>
    )
}

export default History
