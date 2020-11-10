// Se importan todas las librerías de React
import React from 'react';

// Se importan las librerías necesarias para el renderizado de pdf en react
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Se importa la imagen de logo desde la carpeta logos para ser usada en la plantilla
import logo1 from '../logos/logo1.png'
import firma01 from '../logos/firma01.png'

// Aquí se definen los estilos los cuales se guardan en una constante "styles"
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    firma:{
        fontSize: 10,
        marginLeft: 150,
        width: 220,
        textAlign: 'center',
        fontFamily: 'Open Sans',
        fontWeight: 'bold'
    },
    firmaLogo:{
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Open Sans',
        width: 190,
        marginLeft: 160
    },
    title: {
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Open Sans',
        width: 190,
        marginLeft: 160
    },
    author: {
        fontSize: 7,
        marginBottom: 5,
        fontFamily: 'Open Sans',
    },
    subtitle: {
        fontSize: 10,
        margin: 12,
        fontFamily: 'Open Sans',
    },
    subtitle3: {
        fontSize: 10,
        marginLeft: 120,
        marginTop: 20,
        width: 340,
        textAlign: 'justify',
        fontFamily: 'Open Sans',
    },
    subtitlemini: {
        fontSize: 10,
        fontFamily: 'Open Sans',
    },
    text: {
        margin: 10,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Open Sans',
    },
    image: {
        marginVertical: 15,
        height: 75,
        width: 235,
    },
    header: {
        fontSize: 10,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    reclamo: {
        fontSize: 10,
        margin: 12,
        fontFamily: 'Open Sans',
    },
    contentRows: {
        padding: 20,
        '@media max-width: 1000': {
          flexDirection: 'column',
        },
        '@media min-width: 500': {
          flexDirection: 'row',
        },
    },
    block1: {
        height: 220,
        width: 240,
    },
    block2: {
        height: 230,
        width: 250,
    },
    subtitledea: {
        fontSize: 10,
        margin: 12,
        fontFamily: 'Open Sans',
        width: "250",
    },
});

// Aquí las fuentes de letras son registradas, esto es obligatorio para que todas las fuentes necesarias sean reconocidas.
Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
Font.register({
    family: 'Open Sans',
    fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
    ]
});

// Se crea el componente de documento que se renderiza a pdf
const Of_Respuesta_directa_Manejo_Clinico_con_orientacion_a_mediacon = ({ form }) => {
    return (
        <Document>
            <Page style={styles.body}>
                <View  style={styles.contentRows}>
                <View style={styles.block1}>
                    <Image
                        style={styles.image}
                        source={logo1}
                        />
                        <Text style={styles.author}><Text style={{fontWeight: "bold"}}>INTENDENCIA DE PRESTADORES DE SALUD </Text> </Text>
                        <Text style={styles.author}> SUBDEPARTAMENTO DE DERECHOS DE LAS PERSONAS
                        </Text>
                    </View>
                    <View style={styles.block2}>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>SOLICITUD N° {/* {form.reclamo} - {form.solicitud.fecha_creacion.año} */} reclamo, año </Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>ORD. IP/N°: {/* {form.ord_ip} */} ord ip </Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>ANT.: </Text>
                            Solicitud de {/* {form.solicitud.fecha_creacion.dia} de {form.solicitud.fecha_creacion.mes} de {form.solicitud.fecha_creacion.año} */} Fecha.
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>MAT: </Text>
                            {/* {form.math} */} Mat
                        </Text>
                        <Text style={styles.subtitle}>
                        <Text style={{fontWeight: "bold"}}>SANTIAGO  </Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> De  :
                        {form.de} </Text>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> A  :
                        SR(a).{/*  {form.reclamo_previo.nombre} {form.reclamo_previo.apellido} */} Nombre, direccion:{/*  {form.direccion.calle} #{form.direccion.num} */} Direccion - comuna {/* {form.direccion.comuna} */} C, porvincia {/* {form.direccion.provincia} */} Provincia  </Text>
                            Region: {form.direccion.region}
                    </Text>
                    <Text style={styles.subtitle}>
                            1. En el marco de la Ley N° 20.584, que regula los derechos y deberes que tienen las personas en relación con acciones vinculadas a su atención de salud, esta Superintendencia recibió su presentación citada en el Ant., por un eventual incumplimiento a la citada ley, con ocasión de la atención de la paciente Sr(a). {/* {form.nombre} {form.apellido_paterno} {form.apellido_materno} */} Nombre, RUT N° {/* {form.rut} */} Rut, en {/* {form.lugar} */} Lugar.
                    </Text>
                    <Text style={styles.subtitle}>
                            2. Sobre el particular, se debe hacer presente que esta Superintendencia de Salud tiene facultades para resolver reclamos en contra de prestadores de salud que se refieran a vulneraciones de aquellos derechos expresamente consagrados en la antedicha Ley N° 20.584.  Sin embargo, las circunstancias denunciadas en su presentación, relativas al error en la entrega del medicamento por parte de la farmacia del consultorio, y, a las eventuales secuelas que refiere, no se enmarcan en el ámbito de la ley invocada sino que corresponden al manejo clínico individual del caso, materia sobre la cual este organismo fiscalizador se encuentra inhibido de pronunciarse, de conformidad al artículo 121 N° 10 del D.F.L. N° 1/2005, de Salud.
                    </Text>
                    <Text style={styles.subtitle}>
                            3. Sin perjuicio de lo anterior, se hace presente que en caso que desee perseguir la responsabilidad del prestador reclamado, por los daños eventualmente ocasionados a causa de la atención de salud reclamada, puede solicitar una Mediación, según disponen los artículos 43 y siguientes de la Ley N° 19.966, sobre Garantías Explícitas de Salud, que tiene por objeto instar a las partes a alcanzar un acuerdo reparatorio y extrajudicial por los daños eventualmente sufridos. Esta Mediación se efectúa ante el Consejo de Defensa del Estado, en el caso de los prestadores institucionales públicos que forman parte de las redes asistenciales, definidas por el artículo 16 bis del Decreto Ley N° 2.763, de 1979.  En caso de fracasar dicha instancia, se encontrará habilitado para recurrir directamente ante Tribunales de Justicia por la indemnización de perjuicios que pudiere corresponder (PRESTADOR PÚBLICO).
                    </Text>
                    <Text style={styles.subtitle}>
                            Sin perjuicio de lo anterior, se hace presente que en caso que desee perseguir la responsabilidad del prestador reclamado, por los daños eventualmente ocasionados a causa de la atención de salud reclamada, puede solicitar una Mediación, según disponen los artículos 43 y siguientes de la Ley N° 19.966 sobre Garantías Explícitas de Salud, que tiene por objeto instar a las partes a alcanzar un acuerdo reparatorio y extrajudicial por los daños eventualmente sufridos. En tal caso, la Mediación se efectúa ante un mediador acreditado e inscrito en el Registro de Mediadores de la Superintendencia de Salud, cuyos honorarios son de cargo de las partes, debiendo concurrir a las oficinas de este órgano fiscalizador y presentar el Formulario “Solicitud de Mediación”.  En caso de fracasar dicha instancia, se encontrará habilitado para recurrir directamente ante Tribunales de Justicia, por la indemnización de perjuicios que pudiere corresponder (PRESTADOR PRIVADO).
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>
                        Sin otro particular, saluda atentamente a Ud.,
                    </Text>
                    </Text>
                    <Text style={{marginTop: 100}}>
                    </Text>
                    <Text style={styles.firmaLogo}>
                        <Image
                            style={styles.image}
                            source={firma01}
                        />
                    </Text>
                    <Text style={styles.firma}>
                        <Text style={{fontWeight: "bold"}}>
                            {/* {form.firmante.nombre} */} Firmante
                        </Text>
                    </Text>
                    <Text style={styles.firma}>
                        {/* {form.firmante.cargo} */} Firmante Cargo
                    </Text>
                    <Text style={styles.subtitle}>
                    </Text>
                    <Text style={styles.subtitlemini}>
                    JMSV
                    </Text>
                    <Text style={styles.subtitlemini}>
                    Distribución:
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - El indicado
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - Oficina de Partes
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - Expediente
                    </Text>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )
}
export default Of_Respuesta_directa_Manejo_Clinico_con_orientacion_a_mediacon
