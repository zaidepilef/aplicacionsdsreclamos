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
    title: {
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Open Sans',
        width: 190
    },
    title2: {
        fontSize: 13,
        textAlign: 'left',
        fontFamily: 'Open Sans',
    },
    author: {
        fontSize: 7,
        marginBottom: 5,
        fontFamily: 'Open Sans',
    },
    author2: {
        fontSize: 7,
        marginBottom: 1,
        fontFamily: 'Open Sans',
    },
    author3:{
        fontSize: 7,
        marginBottom: 1,
        marginTop:15,
        fontFamily: 'Open Sans',
    },
    subtitle: {
        fontSize: 10,
        margin: 12,
        fontFamily: 'Open Sans',
    },
    subtitle2: {
        fontSize: 10,
        marginLeft: 70,
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
    subtitle4: {
        padding:2,
        fontSize: 9,
        fontFamily: 'Open Sans',
        marginLeft: 50,
        marginRight: 150,
    },
    subtitlemini: {
        fontSize: 10,
        fontFamily: 'Open Sans',
    },
    text: {
        margin: 10,
        fontSize: 10,
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
        marginTop: 140,
        height: 230,
        width: 250,
    },
    block3: {
        marginRight: 150,
    },
    firma: {
        fontSize: 10,
        marginLeft: 150,
        width: 220,
        textAlign: "center",
        fontFamily: "Open Sans",
        fontWeight: "bold"
    },
    firmaLogo:{
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Open Sans',
        width: 190,
        marginLeft: 160
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

// Se crea el componente de documento que se renderisa a pdf
const PDF = ({ form }) => {
    return (
        <Document>
            <Page style={styles.body}>
                <View  style={styles.contentRows}>
                    <View style={styles.block1}>
                    <Image
                        style={styles.image}
                        source={logo1}
                    />
                    </View>
                    <View style={styles.block2}>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>RECLAMO N°: {/* {form.reclamo} - {form.fecha.año} */} Reclamo - Año </Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>RESOLUCIÓN EXENTA IP/N°: {/* {form.ord_ip} */} Ord-Ip</Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>{/* {form.direccion.calle} {form.direccion.num}, {form.direccion.comuna}, {form.direccion.region} */} Direccion</Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtitle}>
                        <Text style={{fontWeight: "bold"}}> VISTO: </Text>
                        </Text>
                        <Text style={styles.subtitle}>
                        Lo dispuesto en la Ley N° 20.584, que regula los derechos y deberes que tienen las personas en relación con acciones vinculadas a su atención en salud; en la Ley N° 19.880, que establece bases de los procedimientos administrativos que rigen los actos de los Órganos de la Administración del Estado; en el Reglamento sobre el procedimiento de reclamo de la Ley N° 20.584, aprobado por el D.S. N° 35, de 2012, de Salud; en la Resolución N° 7, de 2019, de la Contraloría General de la República; y, en la Resolución Exenta RA/N° 882/107/2019 de la Superintendencia de Salud;
                        </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>CONSIDERANDO:</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>1.-</Text></Text>
                    <Text style={styles.text}>Que, mediante la presentación N° {/* {form.reclamo} */} Reclamo , de {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */} Fecha, el/la Sr./Sra. {/* {form.nombre} */} Nombre Reclamante, interpuso un reclamo en contra de {/* {form.prestador.nombre} */} Prestador , por eventuales incumplimientos a la Ley N° 20.584, que regula los derechos y deberes que tienen las personas en relación con acciones vinculadas a su atención de salud.</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>2.-</Text></Text>
                    <Text style={styles.text}>Que, con posterioridad, a través de la presentación N° {/* {form.reclamo} */} Reclamo, de {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */} Fecha, el/la Sr./Sra. {/* {form.nombre} */} Nombre Reclamante, interpuso un reclamo en contra de {/* {form.prestador.nombre} */} Prestador, el/la reclamante manifestó a este Organismo su voluntad de desistir del reclamo antedicho, manifestando que acordó una solución con el prestador reclamado. </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>3.-</Text></Text>
                    <Text style={styles.text}>Que, en virtud de lo dispuesto en el artículo 42 de la Ley N° 19.880, que establece las Bases de los procedimientos administrativos, todo interesado puede desistirse de su solicitud o, si ello no está prohibido por el ordenamiento jurídico, renunciar a sus derechos.</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>4.-</Text></Text>
                    <Text style={styles.text}>Que, en mérito de lo expuesto y en el ejercicio de las facultades que me confiere la ley, <Text style={{fontWeight: "bold"}}>RESUELVO:</Text></Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text>DECLARAR DESISTIDO el reclamo presentado por el/la Sr./Sra. {/* {form.nombre} */} Nombre Reclamante, en contra de {/* {form.prestador.nombre} */} Prestador
                    </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>REGÍSTRESE, NOTIFÍQUESE Y ARCHÍVESE,</Text>
                    </Text>
                    <Text style={{marginTop:60}}>
                        <Text style={{fontWeight: "bold", textAlign:"center"}}>
                        </Text>
                    </Text>
                    <Text style={styles.firmaLogo}>
                        <Image
                        style={styles.image}
                        source={firma01}
                        />
                    </Text>
                    <Text style={styles.firma}>
                        {/* {form.firmante.nombre} */}Firmante
                    </Text>
                    <Text style={styles.firma}>
                        {/* {form.firmante.cargo} */}Firmante Cargo
                    </Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold",textDecoration:"underline"}}>Distribución:</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Reclamante</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Expediente </Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Archivo</Text></Text>
                    <Text style={styles.author3}><Text style={{fontWeight: "bold"}}>FGL/JSV</Text></Text>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )
}
export default PDF
