// Se importan todas las librerías de React
import React from 'react'

// Se importan las librerías necesarias para el renderizado de pdf en react
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer'

// Se importa la imagen de logo desde la carpeta logos para ser usada en la plantilla
import logo2 from '../logos/logo2.png'
import firma02 from '../logos/firma02.png' //cambiar a firma 3 de ricardo

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
    marginLeft: 160,
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
    width: '250',
  },
  firma:{
    fontSize: 10,
    marginLeft: 150,
    width: 220,
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontWeight: 'bold'
  },
})

// Aquí las fuentes de letras son registradas, esto es obligatorio para que todas las fuentes necesarias sean reconocidas.
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
})
Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src:
        'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src:
        'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
  ],
})

// Se crea el componente de documento que se renderiza a pdf
const PDF = ({ form }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.contentRows}>
          <View style={styles.block1}>
            <Image style={styles.image} source={logo2} />
          </View>
          <View style={styles.block2}>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: 'bold' }}>
                ORD.: IF/ N° {/* {form.ordinario} */} Año
              </Text>
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: 'bold' }}>ANT.: </Text>
              Presentación N° de ingreso{/*  {form.solicitud}-{form.año} */} Solicitud - año del/de Sr./Sra. {/* {form.cotizante.nombres} {form.cotizante.apellido_paterno} {form.cotizante.apellido_materno} */} Afectado, de fecha {/* {moment(form.fecha).format('LL')} */} Año.
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: 'bold' }}>MAT: </Text>
              {/* {form.materia.descripcion} */} Materia
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: 'bold' }}>
                Santiago, {/* {moment(form.fecha_now).format('LL')} */} Fecha
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.subtitledea}>
            <Text style={{ fontWeight: 'bold' }}>
              De: Subdepartamento de Resolución de Conflictos
            </Text>
          </Text>
          <Text style={styles.subtitledea}>
            <Text style={{ fontWeight: 'bold' }}>
              A : Señores SUBCOMISIÓN DE MEDICINA PREVENTIVA E INVALIDEZ OCCIDENTE REGIÓN METROPOLITANA
            </Text>
          </Text>
          <Text style={styles.subtitle}>
            Esta Superintendencia recibió la presentación citada en el antecedente, sin embargo, atendido que el asunto sobre el cual ésta incide escapa al ámbito de competencia de este Organismo Fiscalizador, por medio de la presente y de acuerdo a lo dispuesto en el artículo 14 de la Ley N°19.880, cumplo en remitir a ustedes todos los antecedentes correspondientes para dar respuesta al reclamante.
          </Text>
          <Text style={styles.subtitle}>
            Finalmente se remite copia del presente oficio al reclamante, para su conocimiento y posterior seguimiento a la respuesta que le enviará el Organismo al cual se derivó su reclamo.
          </Text>
          <Text style={styles.subtitle}>
            Saluda atentamente a usted,
          </Text>
          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: 'bold' }}>
              "Por orden del Intendente de Fondos y Seguros Previsionales de Salud"
            </Text>
          </Text>
          <Text style={styles.title}>
            <Image style={styles.image} source={firma02} />
          </Text>
          <Text style={styles.title}>
          <Text style={styles.firma}>
              <Text style={{fontWeight: "bold"}}>
                {/* {form.firmante.nombre} */} Firmante Nombre
              </Text>
            </Text>
            <Text style={styles.firma}>
              {/* {form.firmante.cargo} */} Firmante Cargo
            </Text>
            <Text style={styles.firma}>
              Superintendencia de Salud
            </Text>
          </Text>
          <Text style={styles.subtitle} />
          <Text style={styles.subtitlemini}>Distribución:</Text>
          <Text style={styles.subtitlemini}>Señores SUBCOMISIÓN DE MEDICINA PREVENTIVA E INVALIDEZ OCCIDENTE REGIÓN METROPOLITANA</Text>
          <Text style={styles.subtitlemini}>Sr./Sra.{/*  {form.cotizante.nombres} {form.cotizante.apellido_paterno} {form.cotizante.apellido_materno} */} Afectado</Text>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  )
}
export default PDF
