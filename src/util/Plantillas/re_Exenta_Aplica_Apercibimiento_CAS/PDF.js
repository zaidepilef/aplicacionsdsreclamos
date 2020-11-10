import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font
} from "@react-pdf/renderer";
import logo2 from "../logos/logo2.png";
import firma01 from "../logos/firma01.png";


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
  author: {
    fontSize: 7,
    marginBottom: 5,
    fontFamily: "Open Sans"
  },
  author2: {
    fontSize: 7,
    marginBottom: 1,
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
  image: {
    marginVertical: 15,
    height: 150,
    width: 150
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
const ReExentaAplicaApercibimientoCAS = ({ formPdf }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.contentRows}>
          <View style={styles.block1}>
            <Image style={styles.image} source={logo2} />
            <Text style={styles.author}>
              <Text style={{ fontWeight: "bold" }}>
                INTENDENCIA DE PRESTADORES DE SALUD{" "}
              </Text>{" "}
            </Text>
          </View>
          <View style={styles.block2}>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: "bold" }}>
                RECLAMO N°{formPdf && formPdf.n_reclamo} -{" "}
                {formPdf && formPdf.fecha_desde.split("-")[2]}
              </Text>
            </Text>
            <Text style={styles.reclamo}>
              <Text style={{ fontWeight: "bold" }}>
                RESOLUCIÓN EXENTA IP/N° {formPdf && formPdf.folio}{" "}
              </Text>
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>SANTIAGO,</Text>
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: "bold" }}> VISTO: </Text>
            {formPdf && formPdf.bodyState[0]}
          </Text>
          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: "bold" }}>CONSIDERANDO:</Text>
          </Text>
          {formPdf.bodyState &&
            formPdf.bodyState.map((parrafo, index) => (
              <>
                {index !== 0 && index !== formPdf.bodyState.length -1 && (
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
              REGÍSTRESE, NOTIFÍQUESE Y ARCHÍVESE,aaaaa
            </Text>
          </Text>

          <Text style={styles.firmaLogo}>
            <Image style={styles.image} source={firma01} />
          </Text>
          <Text style={styles.subtitle4}>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              {formPdf.firmante && formPdf.firmante.nombre}
            </Text>
          </Text>
          <Text style={styles.subtitle4}>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              {formPdf.firmante && formPdf.firmante.cargo}
            </Text>
          </Text>
          {/* <Text style={styles.author2}>
            <Text style={{ fontWeight: "bold" }}>
              {form.dia}-{form.mes}-{form.año}
            </Text>
          </Text> */}
          <Text style={styles.author2}>
            <Text style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Distribución:
            </Text>
          </Text>
          <Text style={styles.author2}>
            <Text style={{ fontWeight: "bold" }}>- Destinatario</Text>
          </Text>
          <Text style={styles.author2}>
            <Text style={{ fontWeight: "bold" }}>- Expediente </Text>
          </Text>
          <Text style={styles.author2}>
            <Text style={{ fontWeight: "bold" }}>- Archivo</Text>
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
export default ReExentaAplicaApercibimientoCAS;
