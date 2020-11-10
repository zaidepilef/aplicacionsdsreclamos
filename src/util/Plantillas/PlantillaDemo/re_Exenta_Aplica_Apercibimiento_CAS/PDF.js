
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import logo2 from '../logos/logo2.png'



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
const ReExentaAplicaApercibimientoCAS = ({ form }) => {
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
                    <Text style={{fontWeight: "bold"}}>RECLAMO N°{/* {form.n_reclamo} */} N Reclamo</Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>RESOLUCIÓN EXENTA IP/N° {/* {form.ord_ip} */} Ord Ip</Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>SANTIAGO,</Text>
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
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>1°</Text></Text>
                    <Text style={styles.text}> Que, mediante la presentación N° {/* {form.presentacion} */} Prestacion , de {/* { form.fecha_presentacion.desde.dia } del
                    {form.fecha_presentacion.desde.mes} de {form.fecha_presentacion.desde.año} */} Fecha, el(la) Sr(a).{/* {form.nombre_reclamante} {form.apellido_reclamante} */} Nombre Rclamante , RUT N° {/* {form.rut_reclamante} */} reclamó ante esta Superintendencia en contra de {/* {form.prestador} */} Prestador, por un eventual condicionamiento en la atención de salud del paciente Sr(a). {/* {form.nombres_paciente} {form.apellido_paciente} */} Paciente, según los hechos que habrían ocurrido el {/* {form.fecha_ocurrido_desde.dia} de {form.fecha_ocurrido_desde.mes} del {form.fecha_ocurrido_desde.año}. */} Fecha  </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>2°</Text></Text>
                    <Text style={styles.text}> Que, el artículo 31 de la Ley N° 19.880 dispone que toda solicitud que inicie un procedimiento administrativo debe cumplir con determinados requisitos generales y específicos, los que -de no cumplirse- obligan a este órgano administrativo a requerir al interesado para que subsane la falta o acompañe los documentos respectivos, con indicación de que si así no lo hiciere en un plazo de 5 días, se le tendrá por desistido de su petición. </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>3°</Text></Text>
                    <Text style={styles.text}> Que, en virtud de la normativa indicada, mediante oficio Ord. IP/N° {/* {form.ord_ip} */} Ord Ip , de fecha {/* {form.fecha_reclamante_desde.dia} de {form.fecha_reclamante_desde.mes} del {form.fecha_reclamante_desde.año} */} Fecha, se requirió a la parte reclamante, bajo el apercibimiento de tenerle por desistido de su reclamo para que, en el plazo de 5 días hábiles, contado a partir de su notificación, (aclarase los hechos que darían cuenta del eventual condicionamiento de la atención de salud del paciente/ acompañara los documentos solicitados en el aludido oficio/seleccionar).</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>4°</Text></Text>
                    <Text style={styles.text}> Que, habiendo sido notificada la parte reclamante del mencionado oficio, a la fecha no ha cumplido con el requerimiento señalado, correspondiendo hacer efectivo el apercibimiento indicado, por lo que en mérito de lo expuesto y en el ejercicio de las facultades que me confiere la ley, </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>RESUELVO:</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>
                    DECLARAR el desistimiento de las peticiones efectuadas por el(la) Sr(a). {/* {form.nombre_declaración_desistimiento} */} Usuario Aceptador, en el reclamo indicado en el considerando N° 1.
                    </Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={{fontWeight: "bold"}}>REGÍSTRESE, NOTIFÍQUESE Y ARCHÍVESE,</Text>
                    </Text>
                    <Text style={styles.subtitle4}>
                        // To-do agregar firmante
                        <Text style={{fontWeight: "bold", textAlign:"center"}}>
                            CARMEN MONSALVE BENAVIDES
                        </Text>
                    </Text>
                    <Text style={styles.subtitle4}>
                        <Text style={{fontWeight: "bold", textAlign:"center"}}>
                        INTENDENTA DE PRESTADORES DE SALUD (S)
                        </Text>
                    </Text>
                    <Text style={styles.subtitle4}>
                        <Text style={{fontWeight: "bold", textAlign:"center"}}>
                        SUPERINTENDENCIA DE SALUD
                        </Text>
                    </Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>{/* {form.dia}-{form.mes}-{form.año} */} Fecha</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold",textDecoration:"underline"}}>Distribución:</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Destinatario</Text></Text>
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
export default ReExentaAplicaApercibimientoCAS
