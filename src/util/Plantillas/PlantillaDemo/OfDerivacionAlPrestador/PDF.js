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
                            <Text style={{fontWeight: "bold"}}>Reclamo N°: {/* {form.reclamo} */}  N reclamo </Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>ORD. IP/N°:{/* {form.ord_ip} */} ord ip</Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>ANT.: </Text>
                            Reclamo de {/* {form.solicitud.fecha_creacion.dia} de {form.solicitud.fecha_creacion.mes} de {form.solicitud.fecha_creacion.año}, de la Sr(a). {form.reclamo_previo.nombre} {form.reclamo_previo.apellido}, RUT N°{form.reclamo_previo.rut}, en representación del paciente {form.nombre} {form.apellido_paterno} {form.apellido_materno}, RUT N°{form.rut} */} Nombre, Rut y Direccion.
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
                        {/* {form.de} */} De:</Text>
                    </Text>
                    <Text style={styles.subtitledea}>
                        <Text style={{fontWeight: "bold"}}> A  :
                        {/* {form.a} {form.direccion.region} */} direccion
                      </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                            1. En el marco de la Ley N° 20.584, que regula los derechos y deberes que tienen las personas en relación con acciones vinculadas a su atención de salud, esta Superintendencia recibió el reclamo citado en el Ant., en contra del establecimiento que usted representa, por hechos que podrían involucrar una vulneración a dicha Ley.
                    </Text>
                    <Text style={styles.subtitle}>
                            2. Atendido que la citada ley dispone en su artículo 37, inciso primero, que dichos reclamos deben presentarse <Text style={{fontWeight: "bold"}}>previamente ante el prestador institucional involucrado para su respuesta directa al reclamante </Text>y para que, en su caso, adopte las medidas necesarias para solucionar las irregularidades detectadas, y que no habiendo constancia de dicha presentación, se le deriva el reclamo indicado a fin de que otorgue respuesta al reclamante, dentro del plazo de 15 días hábiles, contados desde el día hábil siguiente a su recepción, mediante el presente oficio.  El prestador deberá dar estricto cumplimiento a las normas de tramitación de este tipo de reclamo y de confección del expediente respectivo, de acuerdo a lo prescrito en el artículo 37 de la Ley N° 20.584 y su Reglamento.
                    </Text>
                    <Text style={styles.subtitle}>
                            3. La respuesta del prestador deberá dirigirse al reclamante -con copia a esta Superintendencia- antes del vencimiento del plazo ya señalado, debiendo ser clara, referirse a todas las alegaciones y peticiones efectuadas y proponer, si corresponde, las correcciones que estime pertinentes.  En el último párrafo de su presentación, deberá hacer presente que, en caso que tal respuesta resulte insatisfactoria, el reclamante, o la persona que cuente con poder suficiente para representarlo, podrá reclamar ante la Superintendencia de Salud, en el plazo de 5 días hábiles contados desde el día en que sea notificado de la respuesta del prestador de salud.
                    </Text>
                    <Text style={styles.subtitle}>
                            4. Finalmente, en caso que el prestador no otorgue respuesta al reclamo, dentro del plazo de 15 días hábiles de que dispone, se advierte al reclamante que podrá reclamar ante la Superintendencia de Salud, dentro de los 5 días hábiles siguientes al vencimiento de dicho plazo.
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
                        <Text style={{fontWeight: "bold"}}>
                           {/*  {form.firmante.nombre} */}Firmante
                        </Text>
                    </Text>
                    <Text style={styles.firma}>
                        {/* {form.firmante.cargo} */}Firmante cargo
                    </Text>
                    <Text style={styles.subtitle}>
                    </Text>
                    <Text style={{fontSize: 10, fontFamily: 'Open Sans', marginBottom: 15}}>
                        Adjunta: Reclamo indicado en el antecedente.
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
                    - Oficina de Partes
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
export default Of_Derivacion_a_otros_servicios
