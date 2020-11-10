import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import logo2 from '../logos/logo2.png'
import firma01 from '../logos/firma01.png'


const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
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
        height: 150,
        width: 150,
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
const Of_Traslado_DYD = ({ form }) => {
    return (
        <Document>
            <Page style={styles.body}>
                <View  style={styles.contentRows}>
                    <View style={styles.block1}>
                    <Image
                        style={styles.image}
                        source={logo2}
                        />
                    </View>
                    <View style={styles.block2}>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>ORD. IP/N°:{/* {form.ord_ip}  */} Orden Ip</Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>ANT.: Reclamo de fecha - {/* {form.fecha_dia} {form.fecha.mes} {form.fecha.año} */} Fecha </Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>MAT.: Solicita expediente.</Text>
                        </Text>
                        <Text style={styles.subtitle}>
                        <Text style={{fontWeight: "bold"}}> Santiago, {/* {form.fecha_dia} {form.fecha.mes} {form.fecha.año} */} Fecha</Text>
                        </Text>
                    </View>
                </View>
                <View>

                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> De  :
                        INTENDENTA DE PRESTADORES DE SALUD (S)  SUPERINTENDENCIA DE SALUD</Text>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> A  :
                        //TO-DO Agregar representante
                        DIRECTOR / REPRESENTANTE LEGAL DE </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                        1.- Según lo dispuesto en el artículo 37 de la Ley N°20.584, esta Superintendencia ha recibido el reclamo que se individualiza en el antecedente, por eventual incumplimiento de los derechos que dicha ley confiere.
                    </Text>
                    <Text style={styles.subtitle}>
                        2.- Para la continuación del procedimiento administrativo iniciado, es necesario que ese prestador remita el expediente del reclamo presentado por el/la Sr/Sra. {/* {form.nombres} {form.apellido_paterno} */} Nombres, RUT {/* {form.rut} */}, en representación de Don/Doña {/* {form.nombres} {form.cotizante.apellido} */} Representado,  RUT {/* {form.rut} */}, dentro de los 20 días hábiles siguientes a la notificación del presente oficio.
                    </Text>
                    <Text style={styles.subtitle}>
                        En caso de rechazar lo solicitado por la parte reclamante, además deberá remitir a esta Intendencia un informe completo de la situación denunciada, en el que deberá pronunciarse respecto de cada una de las peticiones formuladas por el interesado en su presentación ante esta Autoridad, y aportar todos aquellos antecedentes que permitan revisar la materia reclamada. En particular, deberá acompañar la ficha clínica ambulatoria y/u hospitalaria del paciente, correspondiente al periodo de las atenciones de salud objeto del reclamo.
                    </Text>
                    <Text style={styles.subtitle}>
                        3.- En caso de que con motivo del presente reclamo, el prestador decida allanarse a las pretensiones de la parte reclamante, deberá comunicarle a ésta su decisión por carta dirigida al domicilio o al correo electrónico registrado en el reclamo que se adjunta a este oficio, acompañando todos los documentos que respalden la respuesta. En tal caso, el prestador deberá remitir a esta Intendencia el expediente del reclamo indicado en el punto 2, la copia de la carta por la que se allana y sus documentos adjuntos.
                    </Text>
                    <Text style={styles.subtitle}>
                        Se hace presente al reclamante que en caso que desee perseguir la responsabilidad del prestador reclamado, por los daños eventualmente ocasionados a causa de la atención de salud reclamada, puede solicitar una Mediación, según disponen los artículos 43 y siguientes de la Ley N° 19.966, sobre Garantías Explícitas de Salud, que tiene por objeto instar a las partes a alcanzar un acuerdo reparatorio y extrajudicial por los daños eventualmente sufridos. Esta Mediación se efectúa ante el Consejo de Defensa del Estado, en el caso de los prestadores institucionales públicos que forman parte de las redes asistenciales, definidas por el artículo 16 bis del Decreto Ley N° 2.763, de 1979.  En caso de fracasar dicha instancia, se encontrará habilitado para recurrir directamente ante Tribunales de Justicia por la indemnización de perjuicios que pudiere corresponder {/* {form.prestador} */} Prestador.
                    </Text>
                    <Text style={styles.subtitle}>
                        Se hace presente al reclamante que en caso que desee perseguir la responsabilidad del prestador reclamado, por los daños eventualmente ocasionados a causa de la atención de salud reclamada, puede solicitar una Mediación, según disponen los artículos 43 y siguientes de la Ley N° 19.966 sobre Garantías Explícitas de Salud, que tiene por objeto instar a las partes a alcanzar un acuerdo reparatorio y extrajudicial por los daños eventualmente sufridos. En tal caso, la Mediación se efectúa ante un mediador acreditado e inscrito en el Registro de Mediadores de la Superintendencia de Salud, cuyos honorarios son de cargo de las partes, debiendo concurrir a las oficinas de este órgano fiscalizador y presentar el Formulario “Solicitud de Mediación”.  En caso de fracasar dicha instancia, se encontrará habilitado para recurrir directamente ante Tribunales de Justicia, por la indemnización de perjuicios que pudiere corresponder {/* {form.prestador} */} Prestador.
                    </Text>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )
}
export default Of_Traslado_DYD
