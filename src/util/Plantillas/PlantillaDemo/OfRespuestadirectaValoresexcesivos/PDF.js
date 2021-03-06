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
import logo1 from '../logos/logo1.png'
import firma02 from '../logos/firma02.png'

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
            <Image style={styles.image} source={logo1} />
          </View>
          <View style={styles.block2}>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: 'bold' }}>
                SOLICITUD N°: {/* {form.solicitud}-{form.año} */} N solicitud y Año
              </Text>
            </Text>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: 'bold' }}>
                ORD. IP/N°: {/*  {form.ordinario} */} Orden Ip
              </Text>
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: 'bold' }}>ANT.: </Text>
              Solicitud de fecha {/* {moment(form.fecha).format('LL')} */} Fecha.
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: 'bold' }}>MAT: </Text>
              {/* {form.materia.descripcion} */} Descripcion
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
              De: INTENDENTA DE PRESTADORES DE SALUD (S) SUPERINTENDENCIA DE
              SALUD
            </Text>
          </Text>
          <Text style={styles.subtitledea}>
            <Text style={{ fontWeight: 'bold' }}>
              A : SR./SRA. {/* {form.cotizante.nombres} {form.cotizante.apellido_paterno} {form.cotizante.apellido_materno} {form.cotizante.direccion_nombre_calle} N° {form.cotizante.direccion_numero_calle}, {form.cotizante.direccion_departamento &&
                `DEPTO. ${form.cotizante.direccion_departamento}`}
              , {form.comuna.nombre}, {form.region.nombre} */} Nombre completo
            </Text>
          </Text>
          <Text style={styles.subtitle}>
            1. Esta Superintendencia recibió su presentación del Ant., por la
            que reclama en contra de {/* {form.establecimiento} */} Establecimiento, por hechos que, a
            su juicio, constituirían una vulneración de la Ley N° 20.584, que
            regula los derechos y deberes que tienen las personas en relación
            con acciones vinculadas a su atención de salud.
          </Text>
          <Text style={styles.subtitle}>
            2. Sobre el particular, se debe hacer presente que esta
            Superintendencia de Salud tiene facultades para resolver reclamos en
            contra de prestadores de salud que se refieran a vulneraciones de
            aquellos derechos expresamente consagrados en la antedicha Ley N°
            20.584, sin embargo, las circunstancias denunciadas en su
            presentación no comprenden transgresiones a los indicados derechos.
          </Text>
          <Text style={styles.subtitle}>
            3. En efecto, cabe indicar que la Ley citada protege el derecho de
            las personas a que se les cobre sólo aquellos insumos, fármacos y
            prestaciones efectivamente utilizados en el tratamiento respectivo;
            no obstante, ello no incluye la revisión del precio que cada
            prestador fija para los fármacos, insumos y prestaciones que utiliza
            en sus tratamientos.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: 'bold' }}>
              Sin otro particular, saluda atentamente a Ud.,
            </Text>
          </Text>
          <Text style={styles.title}>
            <Image style={styles.image} source={firma02} />
          </Text>
          <Text style={styles.title}>
          <Text style={styles.firma}>
              <Text style={{fontWeight: "bold"}}>
                {/* {form.firmante.nombre} */} Firmante
              </Text>
            </Text>
            <Text style={styles.firma}>
              {/* {form.firmante.cargo} */} Firmante Cargo
            </Text>
          </Text>
          <Text style={styles.subtitle} />
          <Text style={styles.subtitlemini}>Distribución:</Text>
          <Text style={styles.subtitlemini}>- Destinatario</Text>
          <Text style={styles.subtitlemini}>- Oficina de Partes</Text>
          <Text style={styles.subtitlemini}>- Expediente</Text>
          <Text style={styles.subtitlemini}>JSV</Text>
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
