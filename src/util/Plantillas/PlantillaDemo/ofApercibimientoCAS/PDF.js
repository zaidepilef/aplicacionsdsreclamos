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
    firma:{
        fontSize: 10,
        marginLeft: 150,
        width: 220,
        textAlign: 'center',
        fontFamily: 'Open Sans',
        fontWeight: 'bold'
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
                            {/* {form.reclamo} */} n_reclamo
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>ORD. IP/N°: {/* {form.ord_ip} */} Ord_ip</Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>ANT.: </Text>Solicitud de {/* {form.fecha.dia} de {form.fecha.mes} de {form.fecha.año} */} Fecha,
                            por la que denuncia eventuales incumplimientos relativos a la Ley N° 20.394.
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>Mat: </Text>
                            Solicita antecedentes del reclamante.
                        </Text>
                        <Text style={styles.subtitle}>
                        <Text style={{fontWeight: "bold"}}>SANTIAGO. </Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtitle}>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> De:  INTENDENTA DE PRESTADORES DE SALUD (S)  SUPERINTENDENCIA DE SALUD</Text>
                    </Text>
                    <Text style={styles.subtitledea}>
    <Text style={{fontWeight: "bold"}}> A:  SR. {/* {form.nombre} {form.apellido_paterno}, {form.direccion.calle} {form.direccion.num}, {form.direccion.comuna}, {form.direccion.region} */} Nombre - Direccion</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                            1. En el marco de la Ley N° 20.394, que prohíbe condicionar la Atención de Salud al otorgamiento de cheques o dinero en efectivo, esta Superintendencia recibió su presentación del Ant.
                    </Text>
                    <Text style={styles.subtitle}>
                            2. De conformidad al artículo 31 de la Ley N° 19.880, que establece las Bases de los procedimientos administrativos, para dar curso a la tramitación de su reclamo es necesario que, dentro del plazo de 5 días hábiles contados desde la recepción del presente oficio, acompañe los siguientes antecedentes:
                    </Text>
                    <Text style={styles.subtitle2}>
                        <Text style={{color: 'red'}}> - Información, antecedentes u otros temas que se pedirán al reclamante.</Text>
                    </Text>
                    <Text style={styles.subtitle2}>
                        <Text style={{color: 'red'}}> - Ejemplo: Aclare los términos de su petición, en particular, especifique si el día 7 de julio de 2015, el prestador reclamado solicitó un pagaré, cheque, dinero en efectivo o si se consultaron sistemas de información comercial, como condición para la atención de salud del paciente.
                        </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                            3. En caso de no dar cumplimiento a lo requerido en el punto anterior, dentro del plazo antes señalado, se le tendrá por desistido su reclamo, en virtud de lo dispuesto en el artículo 31 de la Ley N° 19.880, ya citado.
                    </Text>
                    <Text style={{marginTop: 160}}>
                    </Text>
                    <Text style={styles.subtitle}>
                        Saluda atentamente a Ud.,
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
                    GBM/INICIALES PRACTICANTE
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
                    <Text style={styles.subtitle3}>
                          NOTA: TODA PRESENTACIÓN DE LAS PARTES EN ESTE PROCEDIMIENTO,
                            DEBERÁ INICIARSE CON EL N° COMPLETO DEL RECLAMO.
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
