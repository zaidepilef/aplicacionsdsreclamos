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
    marginLeft: 50,
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
            <Text style={styles.author}>
              <Text style={{ fontWeight: 'bold' }}>
                INTENDENCIA DE PRESTADORES DE SALUD
              </Text>
            </Text>
          </View>
          <View style={styles.block2}>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: 'bold' }}>
                RECLAMO N° {/* {form.reclamo} */} N Reclamo
              </Text>
            </Text>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: 'bold' }}>
                ORD. IP/N°: {/* {form.ordinario} */} Orden ip
              </Text>
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: 'bold' }}>ANT.: </Text>
              {/** del /de la Sr./Sra. */}
              Reclamo de {/* {moment(form.fecha).format('LL')} */} Fecha, del /de la Sr./Sra. {/* {form.cotizante.nombres} {form.cotizante.apellido_paterno} {form.cotizante.apellido_paterno} */} Nombre Cotizante, RUT N° {/* {form.cotizante.rut}-{form.cotizante.dv} */} Rut Cotizante, por el paciente {/* {form.paciente.nombres_paciente} {form.paciente.apellido_paterno_paciente} {form.paciente.apellido_materno_paciente} */} Nombre paciente, RUT N° {/* {form.paciente.rut_paciente}-{form.paciente.dv_paciente} */} Rut Paciente, por
              eventuales incumplimientos relativos a la Ley N° 20.394.
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: 'bold' }}>MAT: </Text>
              {/* {form.materia.descripcion} */}Materia
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: 'bold' }}>
                SANTIAGO, {/* {moment(form.fecha_now).format('LL')} */} Fecha Actual
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
              A : DIRECTOR/REPRESENTANTE LEGAL {/* {form.prestador.nombre_prestador} {form.prestador.direccion_prestador}, {form.prestador.comuna}, {form.prestador.region} */} Nombre Prestador
            </Text>
          </Text>
          <Text style={styles.subtitle}>
            1. Según lo dispuesto en el artículo 121 N° 11 del D.F.L. N° 1 de
            2005, del Ministerio de Salud, esta Superintendencia ha recibido el
            reclamo que se individualiza en el antecedente, por un eventual
            condicionamiento de la atención de salud, en contravención a las
            normas contenidas en las leyes N° 19.650 y N° 20.394, y sus
            respectivas modificaciones, refundidas en el citado D.F.L. N°
            1/2005, de Salud.
          </Text>
          <Text style={styles.subtitle}>
            2. Para la continuación del procedimiento administrativo iniciado,
            es necesario que ese prestador remita un informe detallado de la
            situación reclamada y adjunte, como mínimo, los siguientes
            antecedentes:
          </Text>
          <Text style={styles.subtitlemini}>
            · Ficha clínica completa de la paciente (Dato de Atención de
            Urgencia, TRIAGE y todo antecedente clínico relevante).
          </Text>
          <Text style={styles.subtitlemini}>· Copia de hoja de admisión.</Text>
          <Text style={styles.subtitlemini}>
            · Copia del pagaré solicitado a la reclamante, así como de todo otro
            documento administrativo y financiero que haya emitido o recibido en
            su oportunidad.
          </Text>
          <Text style={styles.subtitlemini}>
            · Registro o comprobante de recepción del mencionado pagaré y de
            todo otro documento financiero (comprobante de recaudación).
          </Text>
          <Text style={styles.subtitlemini}>
            · Cuenta detallada de la hospitalización: insumos, medicamentos,
            exámenes, derechos de pabellón, días de cama y honorarios de quienes
            atendieron al paciente.
          </Text>
          <Text style={styles.subtitlemini}>
            · Copia de boleta o factura de la hospitalización.
          </Text>
          <Text style={styles.subtitlemini}>
            · Copia de procedimiento de admisión del paciente, en la unidad de
            urgencia del establecimiento.
          </Text>
          <Text style={styles.subtitlemini}>
            · Informe sobre consulta de antecedentes comerciales referida por el
            reclamante.
          </Text>
          <Text style={styles.subtitlemini}>
            · Informe sobre el estado actual de la(s) garantía(s) descrita(s) en
            el reclamo (pagaré, letra de cambio, cheque, dinero, etc.),
            informando si ésta(s) se encuentra(n) actualmente en su poder, si
            han sido directamente cobrada(s) o entregada(s) a terceros para su
            cobro judicial o extrajudicial, precisando la fecha de inicio de las
            gestiones de cobro. En caso de haber devuelto la(s) garantía(s) a su
            suscriptor, deberá acreditar su entrega. En caso de que ésta no se
            haya materializado a la fecha por causas ajenas a su
            responsabilidad, deberá acreditar las comunicaciones dirigidas al
            suscriptor a fin de devolverle la(s) garantía(s), aportando los
            antecedentes que respalden las diligencias (correos electrónicos,
            cartas, etc.).
          </Text>
          <Text style={styles.subtitle}>
            3. El cumplimiento de lo ordenado precedentemente deberá realizarse
            ante esta Superintendencia, en el plazo de 20 días hábiles contados
            desde la notificación del presente oficio.
          </Text>
          <Text style={styles.subtitle}>
            4. Finalmente, se le informa que en la tramitación del presente
            procedimiento, esta Superintendencia puede realizar todas las
            diligencias investigativas y de fiscalización necesarias para el
            esclarecimiento de los hechos y para la resolución del presente
            reclamo.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: 'bold' }}>
              Sin otro particular, saluda atentamente a Ud.,
            </Text>
          </Text>
          <Text style={{ marginTop: 100 }} />
          <Text style={styles.title}>
            <Image style={styles.image} source={firma01} />
          </Text>
          <Text style={styles.title}>
          <Text style={styles.firma}>
              <Text style={{fontWeight: "bold"}}>
                {/* {form.firmante.nombre} */}Firmante
              </Text>
            </Text>
            <Text style={styles.firma}>
             {/*  {form.firmante.cargo} */}Firmante Cargo
            </Text>
          </Text>
          <Text style={styles.subtitle} />
          <Text style={styles.subtitlemini}>
            Adjunta: Reclamo indicado en el antecedente.
          </Text>
          <Text style={styles.subtitlemini}>JNF/JMSV</Text>
          <Text style={styles.subtitlemini}>Distribución:</Text>
          <Text style={styles.subtitlemini}>- Destinatario</Text>
          <Text style={styles.subtitlemini}>- Reclamante</Text>
          <Text style={styles.subtitlemini}>- Expediente</Text>
          <Text style={styles.subtitlemini}>- Archivo</Text>
          <Text style={styles.subtitle3}>
            NOTA: TODA PRESENTACIÓN DE LAS PARTES EN ESTE PROCEDIMIENTO, DEBERÁ
            INICIARSE CON EL N° COMPLETO DEL RECLAMO.
          </Text>
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
