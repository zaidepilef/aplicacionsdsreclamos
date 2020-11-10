// Se importan todas las librerías de React
import React from 'react';

// Se importan las librerías necesarias para el renderizado de pdf en react
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Se importa la imagen de logo desde la carpeta logos para ser usada en la plantilla
import logo3 from '../logos/logo3.png'
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
    firma: {
        fontSize: 10,
        marginLeft: 150,
        width: 220,
        textAlign: "center",
        fontFamily: "Open Sans",
        fontWeight: "bold"
    },
    author2: {
        fontSize: 7,
        marginBottom: 1,
        fontFamily: 'Open Sans',
    },
    author3:{
        fontSize: 7,
        marginTop: 5,
        marginBottom:25,
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
    subtitle5: {
        padding:2,
        fontSize: 9,
        fontFamily: 'Open Sans',
        marginLeft: 80,
        marginRight: 80,
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
    text2: {
        marginTop: 7,
        fontSize: 10,
        textAlign: 'justify',
        fontFamily: 'Open Sans',
    },
    image: {
        marginVertical: 15,
        height: 75,
        width: 120,
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
                        source={logo3}
                    />
                    <Text style={styles.author2}><Text style={{fontWeight: "bold",textAlign:"left"}}>INTENDENCIA DE PRESTADORES DE SALUD </Text></Text>
                    <Text style={styles.author2}><Text style={{textAlign:"left"}}>SUBDEPARTAMENTO DE DERECHOS DE LAS PERSONAS </Text></Text>
                    </View>
                    <View style={styles.block2}>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>RECLAMO N°: {/* {form.reclamo} - {form.fecha.año} */} Reclamo - Año</Text>
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{fontWeight: "bold"}}>RESOLUCIÓN EXENTA IP/N°: {/* {form.ord_ip} */} Ord Ip</Text>
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
                    <Text style={styles.text}>Que, el {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */} Fecha, el/la Sr./Sra. {/* {form.nombre} */} Nombre, RUT N° {/* {form.rut} */} Rut, interpuso ante esta Intendencia el reclamo N° {/* {form.reclamo} */} N Reclamo, en contra de {/* {form.prestador.nombre} */} Prestador, por una eventual vulneración a la Ley N° 20.584, que regula los derechos y deberes que tienen las personas en relación con acciones vinculadas a su atención de salud.</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>2.-</Text></Text>
                    <Text style={styles.text}>Que, en virtud de lo dispuesto en el artículo 14 del Reglamento del procedimiento de reclamo de la Ley N° 20.584, aprobado por el D.S N°35/2012, del Ministerio de Salud, los reclamos deben interponerse ante esta Superintendencia dentro del plazo de 5 días hábiles contados desde el día en que el prestador de salud notifique de su respuesta al reclamante o desde el día en que expiren los 15 días hábiles que éste posee para contestar el reclamo, y que en virtud del artículo 16 del mismo reglamento, los reclamos presentados fuera de estos plazos serán declarados inadmisibles.</Text>
                    </Text>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>3.-</Text></Text>
                    <Text style={styles.text2}>Que, de la revisión de los antecedentes aportados a esta instancia se ha podido constatar que el prestador otorgó respuesta al reclamante el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año}, */}  Fecha por tanto, el plazo para interponer el reclamo ante esta Intendencia se prolongó hasta el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */} Fecha.  Sin embargo, la reclamante dedujo su reclamo el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */} FEcha, esto es, encontrándose extinguido el plazo de 5 días hábiles, antes indicado. (CONSTA LA FECHA DE RESPUESTA NOTIFICADA AL RECLAMANTE, POR CORREO ELECTRONICO O CARTA CERTIFICADA). </Text>
                    <Text style={styles.text2}> Que, de la revisión de los antecedentes aportados a esta instancia se ha podido constatar que el prestador otorgó respuesta al reclamante el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año}, */}  Fecha sin embargo, este último recién reclamó ante esta Superintendencia el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */} Fecha, esto es, encontrándose vencido el plazo –de 5 días hábiles- que establece la normativa vigente para ello. (NO CONSTA LA FECHA EXACTA DE NOTIFICACIÓN DE LA RESPUESTA AL RECLAMANTE). </Text>
                    <Text style={styles.text2}> Que, de la revisión de los antecedentes aportados a esta instancia se ha podido constatar que el reclamante presentó reclamo ante el prestador el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */}  Fecha y que transcurrió el plazo de que disponía el prestador –de 15 días hábiles- sin que recibiera respuesta.  En tal caso, el reclamante pudo recurrir a esta Superintendencia hasta el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */} FEcha, sin embargo, dedujo su reclamo el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */} FEcha, esto es, encontrándose vencido el plazo que establece la normativa vigente. (PRESTADOR NO OTORGÓ RESPUESTA).</Text>
                    <Text style={styles.text2}> Que, de la revisión de los antecedentes aportados a esta instancia se ha podido constatar que el prestador otorgó respuesta a la reclamante el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */}  Fecha -según consta en correo electrónico- y, con posterioridad, la parte reclamante apeló a dicha respuesta, a la que el prestador respondió, manteniéndose lo resuelto con anterioridad. En consecuencia, el plazo para interponer el reclamo ante esta Intendencia se prolongó hasta el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */} FEcha.  Sin embargo, la reclamante dedujo su reclamo el día {/* {form.fecha.dia} de {form.fecha.mes} del {form.fecha.año} */} Fecha, esto es, encontrándose extinguido el plazo de 5 días hábiles, antes indicado
          (RESPUESTA DEL PRESTADOR EN 2DA INSTANCIA, MANTENÍENDOSE RESPUESTA INICIAL)</Text>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>4.-</Text></Text>
                    <Text style={styles.text2}>(SOLO SI SE SUGIERE MEDIACIÓN) Que, sin perjuicio de lo anterior, se hace presente que en caso que desee perseguir la responsabilidad del prestador reclamado, por los daños eventualmente ocasionados a causa de la atención de salud reclamada, puede solicitar una Mediación, según disponen los artículos 43 y siguientes de la Ley N° 19.966, sobre Garantías Explícitas de Salud, que tiene por objeto instar a las partes a alcanzar un acuerdo reparatorio y extrajudicial por los daños eventualmente sufridos. Esta Mediación se efectúa ante el Consejo de Defensa del Estado, en el caso de los prestadores institucionales públicos que forman parte de las redes asistenciales, definidas por el artículo 16 bis del Decreto Ley N° 2.763, de 1979.  En caso de fracasar dicha instancia, se encontrará habilitado para recurrir directamente ante Tribunales de Justicia por la indemnización de perjuicios que pudiere corresponder (PRESTADOR PÚBLICO). </Text>
                    <Text style={styles.text2}> Sin perjuicio de lo anterior, se hace presente que en caso que desee perseguir la responsabilidad del prestador reclamado, por los daños eventualmente ocasionados a causa de la atención de salud reclamada, puede solicitar una Mediación, según  disponen los artículos 43 y siguientes de la Ley N° 19.966 sobre Garantías Explícitas de Salud, que tiene por objeto instar a las partes a alcanzar un acuerdo reparatorio y extrajudicial por los daños eventualmente sufridos. En tal caso, la Mediación se efectúa ante un mediador acreditado e inscrito en el Registro de Mediadores de la Superintendencia de Salud, cuyos honorarios son de cargo de las partes, debiendo concurrir a las oficinas de este órgano fiscalizador y presentar el Formulario “Solicitud de Mediación”.  En caso de fracasar dicha instancia, se encontrará habilitado para recurrir directamente ante Tribunales de Justicia, por la indemnización de perjuicios que pudiere corresponder (PRESTADOR PRIVADO).</Text>
                    <Text style={styles.subtitle}>
                    <Text style={styles.subtitle}> <Text style={{fontWeight: "bold"}}>4.-</Text></Text>
                    <Text style={styles.text}>Que, en mérito de lo expuesto y en el ejercicio de las facultades que me confiere la ley, </Text>
                    </Text>
                    <Text style={styles.subtitle}><Text style={{textDecoration: "underline"}}>RESUELVO:</Text></Text>
                    <Text style={styles.subtitle}>
                    <Text>DECLARAR INADMISIBLE, por extemporáneo el reclamo presentado por {/* {form.nombre} */} Representante, en contra de {/* {form.prestador.nombre} */} Prestador</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                    <Text>Se hace presente que en contra de la presente resolución podrá interponerse el recurso de reposición y/o el recurso jerárquico, conforme a la Ley N° 19.880, sobre Bases de los Procedimientos Administrativos, dentro del plazo de cinco días hábiles contados desde la fecha de notificación de la misma.</Text>
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
                        {/* {form.firmante.nombre} */} Firmante
                    </Text>
                    <Text style={styles.firma}>
                        {/* {form.firmante.cargo} */} Firmante Cargo
                    </Text>
                    <Text style={styles.author3}><Text style={{fontWeight: "bold"}}>JAC/JSV</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold",textDecoration:"underline"}}>Distribución:</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Reclamante</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Oficina de Partes</Text></Text>
                    <Text style={styles.author2}><Text style={{fontWeight: "bold"}}>- Expediente</Text></Text>
                    <Text style={styles.subtitle5}>
                    <Text style={styles.subtitle4}><Text style={{textAlign:"center"}}>NOTA: TODA PRESENTACIÓN DE LAS PARTES EN ESTE PROCEDIMIENTO, DEBERÁ INICIARSE CON EL N° COMPLETO DEL RECLAMO.</Text></Text>
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
