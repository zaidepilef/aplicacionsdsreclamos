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
import logo3 from "../logos/logo3.png";
import firma01 from "../logos/firma01.png";

// Aquí se definen los estilos los cuales se guardan en una constante "styles"
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  firmaLogo: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Open Sans",
    width: 190,
    marginLeft: 160
  },
  title: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Open Sans",
    width: 190
  },
  title2: {
    fontSize: 13,
    textAlign: "left",
    fontFamily: "Open Sans"
  },
  author: {
    fontSize: 7,
    marginBottom: 5,
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
  author2: {
    fontSize: 7,
    marginBottom: 1,
    fontFamily: "Open Sans"
  },
  author3: {
    fontSize: 7,
    marginTop: 5,
    marginBottom: 25,
    fontFamily: "Open Sans"
  },
  subtitle: {
    fontSize: 10,
    margin: 12,
    fontFamily: "Open Sans"
  },
  subtitle2: {
    fontSize: 10,
    marginLeft: 70,
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
  subtitle4: {
    padding: 2,
    fontSize: 9,
    fontFamily: "Open Sans",
    marginLeft: 150,
    marginRight: 150
  },
  subtitle5: {
    padding: 2,
    fontSize: 9,
    fontFamily: "Open Sans",
    marginLeft: 80,
    marginRight: 80
  },
  subtitlemini: {
    fontSize: 10,
    fontFamily: "Open Sans"
  },
  text: {
    margin: 10,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Open Sans"
  },
  text2: {
    marginTop: 7,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Open Sans"
  },
  image: {
    marginVertical: 15,
    height: 75,
    width: 120
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
    marginTop: 140,
    height: 230,
    width: 250
  },
  block3: {
    marginRight: 150
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

// Se crea el componente de documento que se renderisa a pdf
const PDF = ({ formPdf, meses }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.contentRows}>
          <View style={styles.block1}>
            <Image style={styles.image} source={logo3} />
            <Text style={styles.author2}>
              <Text style={{ fontWeight: "bold", textAlign: "left" }}>
                INTENDENCIA DE PRESTADORES DE SALUD{" "}
              </Text>
            </Text>
            <Text style={styles.author2}>
              <Text style={{ textAlign: "left" }}>
                SUBDEPARTAMENTO DE DERECHOS DE LAS PERSONAS{" "}
              </Text>
            </Text>
          </View>
          <View style={styles.block2}>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: "bold" }}>
                RECLAMO N°: {formPdf && formPdf.n_reclamo} -{" "}
                {formPdf.fecha_desde && formPdf.fecha_desde.split("-")[2]}
              </Text>
            </Text>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: "bold" }}>
                RESOLUCIÓN EXENTA IP/N°: {formPdf && formPdf.folio}
              </Text>
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>
                {formPdf.cotizante && formPdf.cotizante.direccion_nombre_calle}{" "}
                {formPdf.cotizante && formPdf.cotizante.direccion_numero_calle},{" "}
                {formPdf.comuna && formPdf.comuna.nombre} ,
                {formPdf.region && formPdf.region.nombre}{" "}
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: "bold" }}> VISTO: </Text>
          </Text>
          <Text style={styles.subtitle}>{formPdf && formPdf.bodyState[0]}</Text>
          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: "bold" }}>CONSIDERANDO:</Text>
          </Text>

          {formPdf.bodyState &&
            formPdf.bodyState.map((parrafo, index) => (
              <>
                {index !== 0 && index !== formPdf.bodyState.length - 1 && (
                  <Text style={styles.subtitle}>
                    {index}. {parrafo}
                  </Text>
                )}

                {index === formPdf.bodyState.length - 1 && (
                  <>
                    <Text style={styles.subtitle}>
                      <Text style={{ fontWeight: "bold" }}>RESUELVO:</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                      <Text style={{ fontWeight: "bold" }}>{parrafo}</Text>
                    </Text>
                  </>
                )}
              </>
            ))}

          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: "bold" }}>
              REGÍSTRESE, NOTIFÍQUESE Y ARCHÍVESE,
            </Text>
          </Text>
          <Text style={{ marginTop: 60 }}>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}></Text>
          </Text>
          <Text style={styles.firmaLogo}>
            <Image style={styles.image} source={firma01} />
          </Text>
          <Text style={styles.firma}>
            {formPdf.firmante && formPdf.firmante.nombre}
          </Text>
          <Text style={styles.firma}>
            {formPdf.firmante && formPdf.firmante.cargo}
          </Text>
          <Text style={styles.author3}>
            <Text style={{ fontWeight: "bold" }}>JAC/JSV</Text>
          </Text>
          <Text style={styles.author2}>
            <Text style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Distribución:
            </Text>
          </Text>
          <Text style={styles.author2}>
            <Text style={{ fontWeight: "bold" }}>- Reclamante</Text>
          </Text>
          <Text style={styles.author2}>
            <Text style={{ fontWeight: "bold" }}>- Oficina de Partes</Text>
          </Text>
          <Text style={styles.author2}>
            <Text style={{ fontWeight: "bold" }}>- Expediente</Text>
          </Text>
          <Text style={styles.subtitle5}>
            <Text style={styles.subtitle4}>
              <Text style={{ textAlign: "center" }}>
                NOTA: TODA PRESENTACIÓN DE LAS PARTES EN ESTE PROCEDIMIENTO,
                DEBERÁ INICIARSE CON EL N° COMPLETO DEL RECLAMO.
              </Text>
            </Text>
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
