// Se importan todas las librerías de React
import React from 'react';

// Se importan las librerías necesarias para el renderizado de pdf en react
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Se importa la imagen de logo desde la carpeta logos para ser usada en la plantilla
import logo1 from '../logos/logo1.png'
import firma02 from '../logos/firma02.png'


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
        marginLeft: 12,
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
const Of_Derivacion_a_otros_servicios = ({ form }) => {
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
                            <Text style={{fontWeight: "bold"}}>SOLICITUD N°:{/*  {form.reclamo} - {form.solicitud.fecha_creacion.año} */} Reclamo - Fecha </Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>ORD. IP/N°: {/* {form.ord_ip} */} Ord Ip </Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>ANT.: </Text>
                            Presentación de fecha {/* {form.solicitud.fecha_creacion.dia} de {form.solicitud.fecha_creacion.mes} de {form.solicitud.fecha_creacion.año}, del Sr(a). {form.nombre} {form.apellido_paterno} {form.apellido_materno} */} Nombre y direccion,
                            RUT {/* {form.rut} */} Rut
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>MAT: </Text>
                            {form.math}
                        </Text>
                        <Text style={styles.subtitle}>
                        <Text style={{fontWeight: "bold"}}>SANTIAGO,  </Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={{marginTop: 50}}>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> De  :
                        {/* {form.de} */} De</Text>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> A  :
                        {/* {form.a} */} A</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                            1.-Este organismo recibió la presentación citada en el Ant., por la que se reclama en contra de {form.en_contra} ({form.direccion.provincia},{form.direccion.comuna}), por hechos relacionados a:
                    </Text>
                    <Text style={styles.subtitlemini}>
                    · Beneficios previsionales por incapacidad laboral. (SUSESO)
                    </Text>
                    <Text style={styles.subtitlemini}>
                    · Por eventuales deficiencias del equipamiento/ de los servicios de estacionamiento/hotelería/ alimentación/ custodia otorgados durante su atención de salud. (SERNAC)
                    </Text>
                    <Text style={styles.subtitlemini}>
                    · Por deficiencias estructurales, habilitación para discapacitados, ascensores, higiene espacios comunes (SEREMI).
                    </Text>
                    <Text style={styles.subtitlemini}>
                    · Por eventuales abusos que podrían revestir el carácter de delito (MINISTERIO PÚBLICO)
                    </Text>
                    <Text style={styles.subtitlemini}>
                    . Por eventuales deficiencias en la custodia de las prendas personales en prestadores públicos (SERVICIO DE SALUD CORRESPONDIENTE).
                    </Text>
                    <Text style={styles.subtitlemini}>
                    . Por cobertura de seguros privados de Salud (CMF)
                    </Text>
                    <Text style={styles.subtitle}>
                    2.-Atendido que la situación reclamada escapa de la competencia de la Superintendencia de Salud, fijada en el DFL N° 1, de 2005, de salud, y por el contrario, se relaciona con las funciones de ese Servicio, me permito derivar a Ud. los antecedentes del caso, en virtud de lo dispuesto en el artículo 14 inciso segundo de la Ley N° 19.880.
                    </Text>
                    <Text style={{marginTop: 160}}>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>
                        Sin otro particular, saluda atentamente a Ud.,
                    </Text>
                    </Text>
                    <Text style={styles.firmaLogo}>
                        <Image
                            style={styles.image}
                            source={firma02}
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
                    Adj: Reclamo.
                    </Text>
                    <Text style={styles.subtitlemini}>
                    FSGL/JSV
                    </Text>
                    <Text style={styles.subtitlemini}>
                    Distribución:
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - El indicado
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - Reclamante
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - Expediente
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - Oficina de Partes
                    </Text>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )
}
export default Of_Derivacion_a_otros_servicios
