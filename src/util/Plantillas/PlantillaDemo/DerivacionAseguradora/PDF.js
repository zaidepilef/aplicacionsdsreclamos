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
    width: 190
  },
  firmaLogo: {
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
  firma: {
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
    width: 95,
    marginLeft: 4
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
  underlineDecoration:{
    textDecoration:"underline"
  },
  authorMargin: {
    fontSize: 7,
    marginBottom: 5,
    fontFamily: 'Open Sans',
    marginLeft: 15
  },
  subtitleMt: {
    fontSize: 10,
    margin: 12,
    fontFamily: 'Open Sans',
    marginTop:20
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
        <View style={styles.contentRows}>
          <View style={styles.block1}>
            <Image
              style={styles.image}
              source={logo2}
            />
            <Text style={styles.author}>
              <Text style={{ fontWeight: "bold" }}>Intendencia de Fondos y Seguros</Text>
            </Text>
            <Text style={styles.authorMargin}>
              <Text style={{ fontWeight: "bold" }}>Previsionales de Salud </Text>
            </Text>
          </View>
          <View style={styles.block2}>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: "bold" }}>ORD. IF/N°: {/* {form.ord_if} */} orden if</Text>
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>ANT.: </Text>Presentación N° de ingreso 4004560 -2020
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>Mat: </Text>
                Informa sobre el proceso de tramitación de
                respuesta a su solicitud, conforme a la
                Circular IF N° 4, de 6 de mayo de 2005, de
                esta Intendencia.
              </Text>
            <Text>
              __________________________
            </Text>
            <Text style={styles.subtitle}>
            <Text style={{ fontWeight: "bold" }}>SANTIAGO,{/*  {form.fecha.dia}-{form.fecha.mes}-{form.fecha.año} */} Fecha </Text>
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>

          </Text>

          <Text style={styles.subtitledea}>
            <Text style={{ fontWeight: "bold" }}> De: Subdepartamento de Resolución de Conflictos</Text>


          </Text>
          <Text style={styles.subtitledea}>
            <Text style={{ fontWeight: "bold" }}> A:  SR. {/* {form.nombre} {form.apellido_paterno} */} Nombre Afectado</Text>


          </Text>

          <Text style={styles.subtitle}>
            Esta Intendencia recibió su solicitud citada en el antecedente y, después de revisar los
            planteamientos que contiene, ha concluido que tal presentación debe ser sometida al
            procedimiento especial de tramitación de reclamos establecido en la referida Circular IF N° 4,
            para cuyo efecto, con esta misma fecha, la documentación ha sido enviada en
            forma digital a {/* {form.aseguradora} */} aseguradora.
          </Text>

          <Text style={styles.subtitle}>
            Al respecto, el artículo 18 de la Ley Orgánica de la Superintendencia de Salud, aprobada
            por la Ley N° 19.937, establece que si la Intendencia de Fondos y Seguros Previsionales de
            Salud recibe un reclamo que no haya sido conocido y resuelto por su asegurador en una
            primera instancia, deberá remitirle los antecedentes correspondientes.
          </Text>

          <Text style={styles.subtitle}>
            Es este sentido, este Organismo Fiscalizador ha instruido a dicha Institución de Salud
            que dispone del plazo único e improrrogable de 15 días hábiles contado desde la fecha de
            recepción del referido oficio para darle una respuesta escrita, de manera completa, precisa y
            clara, absolviendo los requerimientos planteados por usted. Asimismo, se instruyó a la
            Aseguradora que, de ser procedente, deberá dar cumplimiento a lo resuelto en su caso,
            dentro de 5 días hábiles siguientes, contado desde el vencimiento del plazo anterior.
          </Text>

          <Text style={styles.subtitle}>
            En el evento que usted no esté de acuerdo con la respuesta de la Aseguradora o ésta no
            se emita dentro del plazo indicado,<Text style={{ fontWeight: "bold" }}>podrá presentar un Nuevo Reclamo a esta
            Intendencia,</Text> solicitando su revisión y respuesta final, adjuntando copia de dicha respuesta,
            si la recibió y de los antecedentes que sirvan de fundamento a su solicitud.
          </Text>

          <Text style={styles.subtitleMt}>
            <Text style={{ fontWeight: "bold" }}>
              Finalmente, para verificar si la Aseguradora respondió la presentación, en
              nuestra página web www.superdesalud.gob.cl, en la sección "Consulte el estado
              de su reclamo", se podrá encontrar el archivo con la respuesta a los
              planteamientos formulados. Para acceder a dicha sección, la clave de acceso es el
              N° de Ingreso del reclamo y el Rut del afectado.
            </Text> 
          </Text>

          <Text style={styles.subtitle}>
            Saluda atentamente a Ud.,
          </Text>
          <Text style={styles.subtitle}>
            Por orden del Intendente de Fondos y Seguros Previsionales de Salud
          </Text>
          <Text style={{ marginTop: 100 }}>
          </Text>
          <Text style={styles.firmaLogo}>
            <Image
              style={styles.image}
              source={firma01}
            />
          </Text>
          <Text style={styles.firma}>
            <Text style={{ fontWeight: "bold" }}>
              {/* {form.firmante.nombre} */} Firmante
            </Text>
          </Text>
          <Text style={styles.firma}>
            {/* {form.firmante.cargo} */} Cargo firmante
          </Text>
          <Text style={styles.subtitle}>
          </Text>
          <Text style={styles.subtitlemini}>
            DISTRIBUCIÓN:
           
          </Text>
          <Text  style={styles.subtitlemini}>
              Señora Jessica Del Carmen Muñoz Torres
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