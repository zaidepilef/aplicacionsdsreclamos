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
    firmaLogo:{
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Open Sans',
        width: 190,
        marginLeft: 160
    },
    firma: {
        fontSize: 10,
        marginLeft: 150,
        width: 220,
        textAlign: "center",
        fontFamily: "Open Sans",
        fontWeight: "bold"
      },
    title: {
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Open Sans',
        width: 190
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
        marginLeft: 150,
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
        marginTop: 140,
        height: 230,
        width: 250,
      },
      block3: {
        marginRight: 150,
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
                        source={logo2}
                    />
                    <Text style={styles.author}><Text style={{fontWeight: "bold"}}>INTENDENCIA DE PRESTADORES DE SALUD </Text> </Text>
                    </View>
                    <View style={styles.block2}>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>RECLAMO N° </Text>
                            <Text>{/* { form.reclamo } - {form.fecha.año} */} Reclamo - Año</Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>RESOLUCIÓN EXENTA IP/N° </Text>
                            <Text>{/* { form.ord_ip } */} Ord Ip</Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>{/* {form.direccion.calle} {form.direccion.num}, {form.direccion.comuna}, {form.direccion.region} */} Direccion</Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtitle}>
                        <Text style={{fontWeight: "bold"}}> VISTO: </Text>
                        Lo dispuesto en la Ley N° 20.584, que regula los derechos y deberes que tienen las personas en relación con acciones vinculadas a su atención en salud; en la Ley N° 19.880, que establece bases de los procedimientos administrativos que rigen los actos de los Órganos de la Administración del Estado; en el Reglamento sobre el procedimiento de reclamo de la Ley N° 20.584, aprobado por el D.S. N° 35, de 2012, de Salud; en la Resolución N° 7, de 2019, de la Contraloría General de la República; y, en la Resolución Exenta RA/N° 882/107/2019 de la Superintendencia de Salud; y,
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>CONSIDERANDO:</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>1° </Text></Text>
                    <Text style={styles.text}> Que, mediante la presentación N° {/* { form.reclamo } */} Reclamo, de {/* { form.fecha.dia } de {form.fecha.mes} del {form.fecha.año} */} Fecha, el(la) Sr(a). {/* {form.nombre}, RUT N° {form.rut} */} Nombre - rut Reclamante, reclamó ante esta Superintendencia en contra de {/* {form.prestador.nombre} */} Prestador, por hechos ocurridos en la atención del paciente, ante un eventual incumplimiento de la Ley N° 20.584.  </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>2° </Text></Text>
                    <Text style={styles.text}> Que, el artículo 31 de la Ley N° 19.880, dispone que toda solicitud que inicie un procedimiento administrativo debe cumplir con determinados requisitos generales y específicos, los que -de no cumplirse- obligan a este órgano administrativo a requerir al interesado para que subsane la falta o acompañe los documentos respectivos, con indicación de que, si así no lo hiciere en un plazo de 5 días, se le tendrá por desistido de su petición.  En el mismo sentido, se pronuncia el artículo 16 del Reglamento sobre el procedimiento de reclamo de la Ley N° 20.584, aprobado por el D.S. N° 35, de 2012, de Salud. </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>3° </Text></Text>
                    <Text style={styles.text}> Que, en virtud de la normativa indicada, mediante el oficio Ord. IP/N° {/* {form.ord_ip} */} Ord ip, de {/* { form.fecha.dia } de {form.fecha.mes} del {form.fecha.año} */} Fecha, se requirió a la parte reclamante, bajo el apercibimiento de tenerlo por desistido de su reclamo para que, en el plazo de 5 días hábiles, (aclarase los hechos acaecidos, los derechos de la Ley N° 20.584 que estimó vulnerados y la petición concreta que realiza a este órgano/acompañara los documentos solicitados en el aludido oficio, seleccionar según el caso). </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>4° </Text></Text>
                    <Text style={styles.text}> Que, encontrándose notificada la parte reclamante del mencionado oficio, a la fecha la parte reclamante no ha cumplido con el requerimiento señalado, correspondiendo hacer efectivo el apercibimiento indicado, por lo que en mérito de lo expuesto y en el ejercicio de las facultades que me confiere la ley, </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>RESUELVO:</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>
                    DECLARAR el desistimiento de las peticiones efectuadas por el(la) Sr(a). {/* {form.nombre} */}, en el reclamo indicado en el considerando N° 1.
                    </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>REGÍSTRESE, NOTIFÍQUESE Y ARCHÍVESE,</Text>
                    </Text>
                    <Text style={styles.firmaLogo}>
                        <Image
                        style={styles.image}
                        source={firma01}
                        />
                    </Text>
                    <Text style={styles.firma}>
                        {/* {form.firmante.nombre} */} Firmante
                    </Text>
                    <Text style={styles.firma}>
                        {/* {form.firmante.cargo} */} Firmante Cargo
                    </Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>XXX/XXX</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold",textDecoration:"underline"}}>Distribución:</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Reclamante</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Oficina de Partes</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Expediente </Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Archivo</Text></Text>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )
}
export default PDF
