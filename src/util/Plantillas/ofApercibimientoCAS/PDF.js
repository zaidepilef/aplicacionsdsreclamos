// Se importan todas las librerías de React
import React from "react";

// Se importan las librerías necesarias para el renderizado de pdf en react
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font
} from "@react-pdf/renderer";

// Se importa la imagen de logo desde la carpeta logos para ser usada en la plantilla
import logo1 from "../logos/logo1.png";
import firma01 from "../logos/firma01.png";

// Aquí se definen los estilos los cuales se guardan en una constante "styles"
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Open Sans",
    width: 190
  },
  firmaLogo: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Open Sans",
    width: 190,
    marginLeft: 160
  },
  author: {
    fontSize: 7,
    marginBottom: 5,
    fontFamily: "Open Sans"
  },
  subtitle: {
    fontSize: 10,
    margin: 12,
    fontFamily: "Open Sans"
  },
  subtitle2: {
    fontSize: 10,
    marginLeft: 60,
    fontFamily: "Open Sans"
  },
  subtitle3: {
    fontSize: 10,
    marginLeft: 120,
    marginTop: 20,
    width: 340,
    textAlign: "justify",
    fontFamily: "Open Sans"
  },
  subtitlemini: {
    fontSize: 10,
    fontFamily: "Open Sans"
  },
  firma: {
    fontSize: 10,
    marginLeft: 150,
    width: 220,
    textAlign: "center",
    fontFamily: "Open Sans",
    fontWeight: "bold"
  },
  text: {
    margin: 10,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Open Sans"
  },
  image: {
    marginVertical: 15,
    height: 75,
    width: 235
  },
  header: {
    fontSize: 10,
    marginBottom: 20,
    textAlign: "center",
    color: "grey"
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey"
  },
  reclamo: {
    fontSize: 10,
    margin: 12,
    fontFamily: "Open Sans"
  },
  contentRows: {
    padding: 20,
    "@media max-width: 1000": {
      flexDirection: "column"
    },
    "@media min-width: 500": {
      flexDirection: "row"
    }
  },
  block1: {
    height: 220,
    width: 240
  },
  block2: {
    height: 230,
    width: 250
  },
  subtitledea: {
    fontSize: 10,
    margin: 12,
    fontFamily: "Open Sans",
    width: "250"
  }
});

// Aquí las fuentes de letras son registradas, esto es obligatorio para que todas las fuentes necesarias sean reconocidas.
Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf"
});
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src:
        "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf"
    },
    {
      src:
        "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600
    }
  ]
});

// Se crea el componente de documento que se renderiza a pdf
const PDF = ({ formPdf, meses }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.contentRows}>
          <View style={styles.block1}>
            <Image style={styles.image} source={logo1} />
            <Text style={styles.author}>
              <Text style={{ fontWeight: "bold" }}>
                INTENDENCIA DE PRESTADORES DE SALUD{" "}
              </Text>{" "}
            </Text>
            <Text style={styles.author}>
              {" "}
              SUBDEPARTAMENTO DE DERECHOS DE LAS PERSONAS
            </Text>
          </View>
          <View style={styles.block2}>
            <Text style={styles.reclamo}>{formPdf && formPdf.n_reclamo}</Text>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: "bold" }}>Reclamo N°: </Text>
              {formPdf && formPdf.n_reclamo} -{" "}
              {formPdf && formPdf.fecha_desde.split("-")[2]}
            </Text>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: "bold" }}>
                ORD. IP/N°: {formPdf && formPdf.folio}
              </Text>
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>ANT.: </Text>Solicitud de{" "}
              {formPdf.fecha_desde && formPdf.fecha_desde.split("-")[0]} de{" "}
              {formPdf.fecha_desde &&
                meses[formPdf.fecha_desde.split("-")[1] - 1]}{" "}
              de {formPdf.fecha_desde && formPdf.fecha_desde.split("-")[2]}, por
              la que denuncia eventuales incumplimientos relativos a la Ley N°
              20.394.
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>Mat: </Text>
              {formPdf && formPdf.materia_form}
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>SANTIAGO. </Text>
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}></Text>
          <Text style={styles.subtitledea}>
            <Text style={{ fontWeight: "bold" }}>
              {" "}
              De: INTENDENTA DE PRESTADORES DE SALUD (S) SUPERINTENDENCIA DE
              SALUD
            </Text>
          </Text>
          <Text style={styles.subtitledea}>
            <Text style={{ fontWeight: "bold" }}>
              {" "}
              A: SR. {formPdf.cotizante && formPdf.cotizante.nombres}{" "}
              {formPdf.cotizante && formPdf.cotizante.apellido_paterno},{" "}
              {formPdf.cotizante && formPdf.cotizante.direccion_nombre_calle}{" "}
              {formPdf.cotizante && formPdf.cotizante.direccion_numero_calle},{" "}
              {formPdf.comuna && formPdf.comuna.nombre} ,
              {formPdf.region && formPdf.region.nombre}{" "}
            </Text>
          </Text>
          {formPdf.bodyState &&
            formPdf.bodyState.map((parrafo, index) => (
              <>
                <Text style={styles.subtitle}>
                  {index + 1}. {parrafo}
                </Text>

                {index === 1 && (
                  <>
                    <Text style={styles.subtitle2}>
                      <Text style={{ color: "red" }}>
                        {" "}
                        - Información, antecedentes u otros temas que se pedirán
                        al reclamante.
                      </Text>
                    </Text>
                    <Text style={styles.subtitle2}>
                      <Text style={{ color: "red" }}>
                        {" "}
                        - Ejemplo: Aclare los términos de su petición, en
                        particular, especifique si el día 7 de julio de 2015, el
                        prestador reclamado solicitó un pagaré, cheque, dinero
                        en efectivo o si se consultaron sistemas de información
                        comercial, como condición para la atención de salud del
                        paciente.
                      </Text>
                    </Text>
                  </>
                )}
              </>
            ))}

          <Text style={{ marginTop: 160 }}></Text>
          <Text style={styles.subtitle}>Saluda atentamente a Ud.,</Text>
          <Text style={{ marginTop: 100 }}></Text>
          <Text style={styles.firmaLogo}>
            <Image style={styles.image} source={firma01} />
          </Text>
          <Text style={styles.firma}>
            <Text style={{ fontWeight: "bold" }}>
              {formPdf.firmante && formPdf.firmante.nombre}
            </Text>
          </Text>
          <Text style={styles.firma}>
            {formPdf.firmante && formPdf.firmante.cargo}
          </Text>
          <Text style={styles.subtitle}></Text>
          <Text style={styles.subtitlemini}>GBM/INICIALES PRACTICANTE</Text>
          <Text style={styles.subtitlemini}>Distribución:</Text>
          <Text style={styles.subtitlemini}>- Reclamante</Text>
          <Text style={styles.subtitlemini}>- Expediente</Text>
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
  );
};
export default PDF;
