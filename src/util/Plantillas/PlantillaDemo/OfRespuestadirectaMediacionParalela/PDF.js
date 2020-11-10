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
            <Text style={styles.author}>
              <Text style={{ fontWeight: 'bold' }}>
                INTENDENCIA DE PRESTADORES DE SALUD
              </Text>
            </Text>
            <Text style={styles.author}>
              SUBDEPARTAMENTO DE DERECHOS DE LAS PERSONAS
            </Text>
          </View>
          <View style={styles.block2}>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: 'bold' }}>
                SOLICITUD N°: {/* {form.solicitud}-{form.año} */} Solicitud
              </Text>
            </Text>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: 'bold' }}>
                ORD. IP/N°: {/* {form.ordinario} */} ord ip
              </Text>
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: 'bold' }}>ANT.: </Text>
              Solicitud de fecha {/* {moment(form.fecha).format('LL')} */} Fecha.
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
              De: INTENDENTA DE PRESTADORES DE SALUD (S) SUPERINTENDENCIA DE
              SALUD
            </Text>
          </Text>
          <Text style={styles.subtitledea}>
            <Text style={{ fontWeight: 'bold' }}>
              A : SR./SRA. {/* {form.cotizante.nombres} {form.cotizante.apellido_paterno} {form.cotizante.apellido_materno} {form.cotizante.direccion_nombre_calle} N° {form.cotizante.direccion_numero_calle}, {form.cotizante.direccion_departamento &&
                `DEPTO. ${form.cotizante.direccion_departamento}`}
              , {form.comuna.nombre}, {form.region.nombre} */} Nombre y direccion completa
            </Text>
          </Text>
          <Text style={styles.subtitle}>
            1. Esta Superintendencia de Salud ha recibido su solicitud del Ant.
            por un eventual incumplimiento a la Ley N° 20.584, respecto de las
            atenciones de salud recibidas por el/la paciente {/* {form.paciente.nombres_paciente} {form.paciente.apellido_paterno_paciente} {form.paciente.apellido_materno_paciente} */} Datos del paciente en {/* {form.establecimiento} */} Establecimiento.
          </Text>
          <Text style={styles.subtitle}>
            2. Sobre el particular, es pertinente señalar que esta
            Superintendencia de Salud tiene facultades para resolver reclamos,
            como también, para gestionar solicitudes de mediación presentadas en
            contra de prestadores de salud por vulneración a la citada Ley. No
            obstante, el o la afectada debe escoger una de dichas vías, no
            resultando posible gestionar paralelamente ambos procedimientos.
          </Text>
          <Text style={styles.subtitle}>
            3. En consecuencia y constando ante este órgano fiscalizador, su
            presentación N° {/* {form.presentacion.n_presentacion} */} Presentacion, de fecha {/* {moment(form.presentacion.fecha_presentacion).format('LL')} */} Fecha, por la
            que solicitó una mediación por los mismos hechos reclamados en
            contra del mismo prestador, corresponde informarle que se dió curso
            a dicha solicitud de mediación y se archivará el formulario N° {/* {form.presentacion.n_formulario} */} Numero formulario, sobre el cual recae el presente
            oficio.
          </Text>
          <Text style={styles.subtitle}>
            4. En caso del fracaso de la antedicha instancia, se encontrará
            habilitada para recurrir directamente ante los Tribunales de
            Justicia por la indemnización de perjuicios que pudiere
            corresponder.
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
                {/* {form.firmante.nombre} */}Firmante
              </Text>
            </Text>
            <Text style={styles.firma}>
              {/* {form.firmante.cargo} */}Firmante Cargo
            </Text>
          </Text>
          <Text style={styles.subtitle} />
          <Text style={styles.subtitlemini}>Distribución:</Text>
          <Text style={styles.subtitlemini}>- Destinatario</Text>
          <Text style={styles.subtitlemini}>- Expediente</Text>
          <Text style={styles.subtitlemini}>- Archivo</Text>
          <Text style={styles.subtitlemini}>FSGL/JSV</Text>
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
