import React, { useState, useEffect } from 'react'
import ContainerHeader from 'components/ContainerHeader';
import { getInstanciaApi } from 'api/Instancias/instancia'
import { getAccessToken } from 'api/auth'; 
import OfApercibimientoCAS from './ofApercibimientoCAS/OfApercibimientoCAS'
import OfApercibimientoDyD from './ofApercibimientoDyD/OfApercibimientoDyD'
import OfRespuestaDirectaADR from './ofRespuestaDirectaADR/OfRespuestaDirectaADR'
import OfRespuestaDirectaCPO from './ofRespuestaDirectaCPO/OfRespuestaDirectaCPO'
import OfRespuestadirectaMediacionParalela from './OfRespuestadirectaMediacionParalela/OfRespuestadirectaMediacionParalela'
import OfRespuestadirectaValoresexcesivos from './OfRespuestadirectaValoresexcesivos/OfRespuestadirectaValoresexcesivos'
import OfTrasladoCAS from './OfTrasladoCAS/OfTrasladoCAS'; 
import ReExentaAplicaApercibimientoDyD from './Re_Exenta_aplica_apercibimiento_DyD/Re_Exenta_aplica_apercibimiento_DyD';
import ReExentaDesistimientoVoluntarioDeReclamanteCAS from './Re_Exenta_desistimiento_voluntario_de_reclamante_CAS/Re_Exenta_desistimiento_voluntario_de_reclamante_CAS';
import ReExentaDesistimientoVoluntarioDeReclamanteDyDs from './Re_Exenta_desistimiento_voluntario_de_reclamante_DyD/Re_Exenta_desistimiento_voluntario_de_reclamante_DyD';
import ReExentaReclamoExtemporaneo from './Re_Exenta_reclamo_extemporaneo/Re_Exenta_reclamo_extemporaneo';

import { getAllComunas } from 'api/Mantenedores/Comunas/comunas';
import { getAllRegiones } from 'api/Mantenedores/Regiones/regiones';
import { getAllProvincias } from 'api/Mantenedores/Provincias/provincias';


const Plantillas = ({match}) => {

    const token = getAccessToken();
    const [instanciaForm, setInstanciaForm] = useState({})

    const [comunas, setComunas] = useState([]);
    const [regiones, setRegiones] = useState([]);
    const [provincia, setProvincia] = useState([]);
    const [formPdf, setFormPdf] = useState({});
    const [region, setRegion] = useState([]);
    const [meses, setMeses] = useState(["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]);


    const obtenerDatos = async () =>{

        const instancia = await getInstanciaApi(token, 16);
        setInstanciaForm(instancia);

        const comunasApi = await getAllComunas(token);
        setComunas(comunasApi.data);

        const regionApi = await getAllRegiones(token);
        setRegiones(regionApi.data);
        setRegion(regionApi.data);

        const provinciaApi = await getAllProvincias(token);
        setProvincia(provinciaApi.data);
    }


    useEffect(() => {
        obtenerDatos();
    }, [token]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Plantillas" />
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <OfApercibimientoCAS
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm}
                        meses={meses}
                        setMeses={setMeses}
                        provincia={provincia}
                        comunas={comunas}
                        region={region}
                        setProvincia={setProvincia}
                        setComunas={setComunas}
                        setRegion={setRegion}
                        formPdf={formPdf}
                        setFormPdf={setFormPdf}
                    />
                </div>
            </div>
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <OfApercibimientoDyD
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm}
                        meses={meses}
                        provincia={provincia}
                        comunas={comunas}
                        region={region}
                        setProvincia={setProvincia}
                        setComunas={setComunas}
                        setRegion={setRegion}
                    />
                </div>
            </div>   
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <OfRespuestaDirectaADR
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm}
                        meses={meses}
                        provincia={provincia}
                        comunas={comunas}
                        region={region}
                        setProvincia={setProvincia}
                        setComunas={setComunas}
                        setRegion={setRegion}
                    />
                </div>
            </div>   
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <OfRespuestaDirectaCPO
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm}
                        meses={meses}
                        provincia={provincia}
                        comunas={comunas}
                        region={region}
                        setProvincia={setProvincia}
                        setComunas={setComunas}
                        setRegion={setRegion}
                    />
                </div>
            </div>
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <OfRespuestadirectaMediacionParalela
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm}
                        provincia={provincia}
                        comunas={comunas}
                        region={region}
                        setProvincia={setProvincia}
                        setComunas={setComunas}
                        setRegion={setRegion}
                    />
                </div>
            </div>   
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <OfRespuestadirectaValoresexcesivos
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm}
                        provincia={provincia}
                        comunas={comunas}
                        region={region}
                        setProvincia={setProvincia}
                        setComunas={setComunas}
                        setRegion={setRegion}
                    />
                </div>
            </div>   
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <OfTrasladoCAS
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm}
                        provincia={provincia}
                        comunas={comunas}
                        region={region}
                        setProvincia={setProvincia}
                        setComunas={setComunas}
                        setRegion={setRegion}
                    />
                </div>
            </div>
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <ReExentaAplicaApercibimientoDyD
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm} 
                        regiones={regiones} 
                        setRegiones={setRegiones}
                        meses={meses} 
                    />
                </div>
            </div>   
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <ReExentaDesistimientoVoluntarioDeReclamanteCAS
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm} 
                        regiones={regiones} 
                        setRegiones={setRegiones}
                        meses={meses}
                    />
                </div>
            </div>   
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <ReExentaDesistimientoVoluntarioDeReclamanteDyDs
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm} 
                        regiones={regiones} 
                        setRegiones={setRegiones}
                        meses={meses}
                    />
                </div>
            </div>    
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <ReExentaReclamoExtemporaneo
                        instanciaForm={instanciaForm}
                        setInstanciaForm={setInstanciaForm} 
                        regiones={regiones} 
                        setRegiones={setRegiones}
                        meses={meses} 
                    />
                </div>
            </div> 
        </div>
    );
}

export default Plantillas;