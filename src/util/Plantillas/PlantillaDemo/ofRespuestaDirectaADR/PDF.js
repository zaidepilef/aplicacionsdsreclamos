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
        width: 190,
        marginLeft: 160
    },
    firmaLogo:{
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
    firma:{
        fontSize: 10,
        marginLeft: 150,
        width: 220,
        textAlign: 'center',
        fontFamily: 'Open Sans',
        fontWeight: 'bold'
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
                        <Text style={styles.author}><Text style={{fontWeight: "bold"}}>INTENDENCIA DE PRESTADORES DE SALUD </Text> </Text>
                        <Text style={styles.author}> SUBDEPARTAMENTO DE DERECHOS DE LAS PERSONAS
                        </Text>
                    </View>
                    <View style={styles.block2}>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>Reclamo N°: </Text>
                            <Text >{/* {form.reclamo} - {form.fecha.año} */} Fecha</Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>ORD. IP/N°: {/* {form.ord_ip} */} ord ip</Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>ANT.:<Text>
                                Solicitud de {/* {form.solicitud.fecha_creacion.dia} de {form.solicitud.fecha_creacion.mes} de {form.solicitud.fecha_creacion.año} */} Fecha, por la que denuncia eventual vulneración a la Ley N° 20.584.
                            </Text>
                                </Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>MAT: </Text>
                            Solicita antecedentes del reclamante.
                        </Text>
                        <Text style={styles.subtitle}>
                        <Text style={{fontWeight: "bold"}}>SANTIAGO, {/*  {form.fecha.dia} de {form.fecha.mes} de {form.fecha.año} */} Fecha </Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtitle}>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> De:  INTENDENTA DE PRESTADORES DE SALUD (S)  SUPERINTENDENCIA DE SALUD </Text>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> A:  SR. {/* {form.nombre} {form.apellido_paterno}, {form.direccion.calle} N° {form.direccion.num} , {form.direccion.comuna}, {form.direccion.region} */} Nombre y Direccion</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                            1. En el marco de la Ley N° 20.584, que regula los derechos y deberes que tienen las personas en relación con acciones vinculadas a su atención de salud, esta Superintendencia recibió su presentación citada en el ant., por la que denuncia una eventual vulneración a dicha norma.
                    </Text>
                    <Text style={styles.subtitle}>
                           Con posterioridad, el {/* {form.reclamo_previo.fecha.dia} de {form.reclamo_previo.fecha.mes} de {form.reclamo_previo.fecha.año} */} Fecha, se recibió el formulario de reclamo N° {/* {form.reclamo_previo.reclamo} */} n Reclamo, interpuesto por el/la Sr./Sra. {/* {form.reclamo_previo.nombre} {form.reclamo_previo.apellido} */} Nombre, relativo a la misma atención de salud de la paciente, en contra del mismo prestador de salud y fundado en los mismos hechos, antecedentes y peticiones.
                    </Text>
                    <Text style={styles.subtitle}>
                            De acuerdo a lo expuesto, y fundado en lo previsto en el artículo 33 de la Ley N° 19.880 de 2003, que establece bases de los procedimientos administrativos que rigen los actos de los Órganos de la Administración del Estado, este organismo dispone la acumulación del reclamo N° {/* {form.reclamo_previo.reclamo} */} Reclamo Previo al procedimiento de reclamo más antiguo, esto es, el actual N° {/* {form.reclamo} */} Reclamo, por existir íntima conexión entre ambos.
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
                        source={firma01}
                        />
                    </Text>
                    <Text style={styles.firma}>
                        <Text style={{fontWeight: "bold"}}>
                            {/* {form.firmante.nombre} */}Firmante
                        </Text>
                    </Text>
                    <Text style={styles.firma}>
                        {/* {form.firmante.cargo} */}Firmante Cargo
                    </Text>
                    <Text style={styles.subtitle}>
                    </Text>
                    <Text style={styles.subtitlemini}>
                    FSGL/MGBM
                    </Text>
                    <Text style={styles.subtitlemini}>
                    Distribución:
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - Reclamante
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
export default PDF
