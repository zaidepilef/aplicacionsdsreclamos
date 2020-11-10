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
const Of_Respuesta_directa_CAS = ({ form }) => {
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
                            <Text style={{fontWeight: "bold"}}>RECLAMO N° {form.reclamo} - {form.solicitud.fecha_creacion.año} </Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>ORD. IP/N°: {form.ord_ip} </Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>ANT.: </Text>
                            Solicitud de fecha {form.solicitud.fecha_creacion.dia} de {form.solicitud.fecha_creacion.mes} de {form.solicitud.fecha_creacion.año}
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
                        {form.de} </Text>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> A  :
                        SR(a). <Text style={{color: 'red'}}> {form.nombre} {form.apellido_paterno} {form.apellido_materno}, direccion: {form.direccion.calle} #{form.direccion.num} - comuna {form.direccion.comuna}, porvincia {form.direccion.provincia}  </Text>
                            Region: {form.direccion.region}
                        </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                            1. Esta Superintendencia recibió su presentación del Ant., por la que reclama en contra de {form.en_contra}, por hechos que, a su juicio, constituirían una vulneración de las Leyes  N° 19.650 y N° 20.394, y sus respectivas modificaciones, refundidas en el DFL N° 1, que prohíben el condicionamiento de la atención, conducta que se habría producido,  en el contexto de la atención de salud otorgada a usted.
                    </Text>
                    <Text style={styles.subtitle}>
                            2. Sobre el particular, se debe hacer presente que el artículo 173 bis del D.F.L. N° 1, de 2005, de Salud, dispone que: "Los prestadores de salud no podrán exigir, como garantía de pago por las prestaciones que reciba el paciente, el otorgamiento de cheques o de dinero en efectivo. En estos casos, se podrá garantizar el pago por otros medios idóneos, tales como el registro de la información de una tarjeta de crédito, cartas de respaldo otorgadas por los empleadores, o letras de cambio o pagarés, los que se regirán por las normas contenidas en la ley Nº 18.092".
                    </Text>
                    <Text style={styles.subtitle}>
                            Por consiguiente, el prestador, tratándose de una atención electiva, está facultado para exigir la entrega de un pagaré para garantizar el pago de las prestaciones. Asimismo, está facultado para verificar la capacidad económica de la persona que solicita la atención de salud.
                    </Text>
                    <Text style={styles.subtitle}>
                            3. Por lo expuesto, los hechos denunciados por usted no constituyen una infracción a la normativa previamente citada, por lo que su presentación será rechazada
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
                            {form.firmante.nombre}
                        </Text>
                    </Text>
                    <Text style={styles.firma}>
                        {form.firmante.cargo}
                    </Text>
                    <Text style={styles.subtitle}>
                    </Text>
                    <Text style={styles.subtitlemini}>
                    GBM/<Text style={{color: "red"}}>INICIALES PRACTICANTE</Text>
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
                    NOTA: TODA PRESENTACIÓN DE LAS PARTES EN ESTE PROCEDIMIENTO, DEBERÁ INICIARSE CON EL N° COMPLETO DEL RECLAMO.
                    </Text>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )
}
export default Of_Respuesta_directa_CAS
