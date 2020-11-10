import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import logo1 from '../logos/logo1.png'
import firma01 from '../logos/firma01.png'
import OfTrasladoIVE from './OfTrasladoIVE';

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
                            <Text style={{fontWeight: "bold"}}>Reclamo N°: {form.n_reclamo} </Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>ORD. IP/N°:{form.ord_ip}  </Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>ANT.: </Text>
                            Reclamo {form.desde.dia}-{form.desde.mes}-{form.desde.año} de la Sra. {form.nombre_reclamo_de_fecha}, RUT {form.rut_reclamo_de_fecha}, por eventual incumplimiento de lo previsto en el artículo 119 del Código Sanitario y la Ley N° 20.584.
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>MAT: </Text>
                            Deriva reclamo al prestador, en lo relativo a las materias de la Ley N° 20.584, para su respuesta y adopción de las medidas que procedan.
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
                        INTENDENTA DE PRESTADORES DE SALUD (S)  SUPERINTENDENCIA DE SALUD</Text>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> A  :
                        : SR(A).
                    DIRECTOR/REPRESENTANTE LEGAL (PRESTADOR) {form.prestador}
                    {form.direccion_nombre_calle}, {form.direccion_numero_calle}
                    {form.region.id}, {form.comuna.id} ,{form.provincia.id}
                    </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                            1. Esta Superintendencia ha recibido el reclamo que se individualiza en el antecedente, por un eventual incumplimiento del derecho previsto en el artículo 119, inc. 11, del Código Sanitario y el D.S. N° 44, de 2018, que aprueba el Reglamento de las prestaciones incluidas en el programa de acompañamiento y materias afines de la Ley N° 21.030.
                    </Text>
                    <Text style={styles.subtitle}>
                            2. Para la continuación del procedimiento administrativo iniciado, es necesario que el prestador de salud que representa remita el expediente del reclamo presentado por el(la) Sr(a). XXXX, RUT XXXXXX-X, y la ficha clínica ambulatoria y/u hospitalaria de la paciente, del período de las atenciones de salud objeto del reclamo, dentro del plazo de 5 días hábiles siguientes a la notificación del presente oficio.
                    </Text>
                    <Text style={styles.subtitle}>
                            3. Se informa que, en la tramitación del presente procedimiento, esta Superintendencia puede realizar todas las diligencias investigativas y de fiscalización necesarias para el esclarecimiento de los hechos y para la resolución del presente reclamo.
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
                    <Text style={styles.title}>
                        <Text style={{fontWeight: "bold"}}>
                            CARMEN MONSALVE BENAVIDES
                            INTENDENTA DE PRESTADORES DE SALUD (S)
                            SUPERINTENDENCIA DE SALUD
                        </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    </Text>
                    <Text style={styles.subtitlemini}>
                    Adjunta: Reclamo indicado en el antecedente.
                    {form.fecha_inicio_reclamo.dia} {form.fecha_inicio_reclamo.mes} {form.fecha_inicio_reclamo.año}
                    </Text>
                    <Text style={styles.subtitlemini}>
                    Distribución:
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - Prestador
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - Reclamante
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - Expediente
                    </Text>
                    <Text style={styles.subtitlemini}>
                    - Archivo
                    </Text>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
)
}
export default OfTrasladoIVE;
