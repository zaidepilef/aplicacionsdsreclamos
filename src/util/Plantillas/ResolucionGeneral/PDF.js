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
import logo2 from "../logos/logo2.png";
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
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Open Sans",
    width: "100%",
    textDecoration:"underline"
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
  text: {
    margin: 10,
    fontSize: 14,
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
    height: 230,
    width: 250
  },
  subtitledea: {
    fontSize: 10,
    margin: 12,
    fontFamily: "Open Sans",
    width: "250"
  },
  firma: {
    fontSize: 10,
    marginLeft: 150,
    width: 220,
    textAlign: "center",
    fontFamily: "Open Sans",
    fontWeight: "bold"
  }
});

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
        <View>
          <Text style={styles.title}>
            {formPdf && formPdf.materia_form}
          </Text>

          {formPdf.bodyState &&
            formPdf.bodyState.map((parrafo, index) => (
              <>
                <Text style={styles.subtitle}>
                  {index + 1}. {parrafo}{" "}
                </Text>
                {index === 1 && (
                  <>
                    {formPdf.documentos && formPdf.documentos.ci && (
                      <Text style={styles.subtitle2}>
                        <Text>
                          -Copia de cédula de identidad por ambos lados.
                        </Text>
                      </Text>
                    )}
                    {formPdf.documentos && formPdf.documentos.nac && (
                      <Text style={styles.subtitle2}>
                        <Text>
                          -Certificado de nacimiento de su (s) carga (s).
                        </Text>
                      </Text>
                    )}
                    {formPdf.documentos && formPdf.documentos.recl && (
                      <Text style={styles.subtitle2}>
                        <Text>-Certificado de Matrimonio</Text>
                      </Text>
                    )}
                    {formPdf.documentos && formPdf.documentos.res && (
                      <Text style={styles.subtitle2}>
                        <Text>-Carta de Adecuacion.</Text>
                      </Text>
                    )}
                    {formPdf.documentos && formPdf.documentos.pod && (
                      <Text style={styles.subtitle2}>
                        <Text>-Poder dirigido al Representante</Text>
                      </Text>
                    )}
                    {formPdf.documentos && formPdf.documentos.hec && (
                      <Text style={styles.subtitle2}>
                        <Text>-Poder dirigido al Reclamante</Text>
                      </Text>
                    )}
                  </>
                )}
              </>
            ))}
          <Text style={{ marginTop: 130 }}></Text>
          <Text style={styles.subtitle}>
            Notifíquese al reclamante la presente resolución.
          </Text>
          <Text style={styles.subtitle}>Proveyó el Juez Arbitro</Text>
          <Text style={{ marginTop: 80 }}></Text>
          <Text style={styles.firmaLogo}>
            <Image style={styles.image} source={firma01} />
          </Text>
          <Text style={styles.firma}>
            {formPdf.firmante && formPdf.firmante.nombre}
          </Text>
          <Text style={styles.firma}>
            {formPdf.firmante && formPdf.firmante.cargo}
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
