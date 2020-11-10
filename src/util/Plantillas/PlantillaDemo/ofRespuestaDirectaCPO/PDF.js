// Se importan todas las librerías de React
import React from 'react';

// Se importan las librerías necesarias para el renderizado de pdf en react
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Se importa la imagen de logo desde la carpeta logos para ser usada en la plantilla
import logo2 from '../logos/logo2.png'
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
                        source={logo2}
                        />
                        <Text style={styles.author}><Text style={{fontWeight: "bold"}}>INTENDENCIA DE PRESTADORES DE SALUD </Text> </Text>
                    </View>
                    <View style={styles.block2}>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}> 300. Elaborar respuesta directa.</Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            {/* <Text style={{fontWeight: "bold"}}>Reclamo N°: {form.reclamo} - {form.fecha.año}</Text> */}
                        </Text>
                        <Text style={styles.reclamo}>
                            {/* <Text style={{fontWeight: "bold"}}>ORD. IP/N°: {form.ord_ip} </Text> */}
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>ANT.:<Text>
                            {/* Solicitud de {form.fecha.dia} de {form.fecha.mes} de {form.fecha.año}. */}
                            </Text>
                                </Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>MAT: </Text>
                            Informa lo que indica.
                        </Text>
                        <Text style={styles.subtitle}>
                        <Text style={{fontWeight: "bold"}}>SANTIAGO,  </Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtitle}>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> De:
                        INTENDENTA DE PRESTADORES DE SALUD (S)  SUPERINTENDENCIA DE SALUD</Text>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> A:
                        {/* SRA./SR. {form.nombre} {form.apellido_paterno}, {form.direccion.calle} N° {form.direccion.num}, {form.direccion.comuna}, {form.direccion.region} */}</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                            1. Esta Superintendencia recibió su presentación citada en el Ant., dirigida en contra de (prestador reclamado), por hechos que a su juicio constituirían una vulneración a la Ley N° 20.584, que regula los derechos y deberes que tienen las personas en relación con acciones vinculadas a su atención en salud, por la atención otorgada el (fecha), respecto de la cual Ud. solicita (describir petición brevemente).
                    </Text>
                    <Text style={styles.subtitle}>
                            2. Sobre el particular, cabe indicar que esta Superintendencia de Salud tiene facultades para resolver reclamos en contra de prestadores de salud que se refieran a vulneraciones de aquellos derechos expresamente consagrados en la Ley N° 20.584.  Sin embargo, las circunstancias denunciadas en su presentación no comprenden vulneraciones a los indicados derechos.
                    </Text>
                    <Text style={styles.subtitle}>
                            3. En efecto, cabe indicar que la Ley mencionada no prohíbe a un prestador exigir el pago íntegro de una atención de salud, una vez que ésta ha sido efectivamente otorgada.
                    </Text>
                    <Text style={{marginTop: 160}}>
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
                        {/* {form.firmante.nombre} */}
                    </Text>
                    <Text style={styles.firma}>
                        {/* {form.firmante.cargo} */}
                    </Text>
                    <Text style={styles.subtitle}>
                    </Text>
                    <Text style={styles.subtitlemini}>
                    XXX/XXX
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
