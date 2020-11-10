import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Open Sans',
    },
    author: {
        fontSize: 10,
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 13,
        margin: 12,
        fontFamily: 'Open Sans',
    },
    text: {
        margin: 12,
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
        fontSize: 12,
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
        fontSize: 13,
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
});

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

// Create Document Component
const PDF = ({ form }) => {
    return (
        <Document>
            <Page style={styles.body}>
                <View style={styles.contentRows}>
                    <View style={styles.block1}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFnCO_zmi9iUg/company-logo_200_200/0?e=2159024400&v=beta&t=bQQkJg2ZtfS6gH5GGysl4b9ZALR8pkfDhpph5izKRKo' }}
                        />
                        <Text style={styles.author}>INTENDENCIA DE PRESTADORES DE SALUD</Text>
                    </View>
                    <View style={styles.block2}>
                        <Text style={styles.reclamo}>
                            <Text style={{ fontWeight: "bold" }}>Reclamo N°: </Text>{form.reclamo}
                        </Text>
                        <Text style={styles.reclamo}>
                            <Text style={{ fontWeight: "bold" }}>ORD. IP/N°: </Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{ fontWeight: "bold" }}>ANT.: </Text>Reclamo de {form.fecha.dia} de {form.fecha.mes} de {form.fecha.año}, del (la) Sr(a). {form.nombre} {form.apellido_paterno}, RUT XXXXXX-X, por eventual incumplimiento de lo previsto en el artículo 119 del Código Sanitario y la Ley N° 20.584.
                        </Text>
                        <Text style={styles.subtitle}>
                            <Text style={{ fontWeight: "bold" }}>Mat: </Text>{form.math}
                        </Text>
                        <Text style={styles.subtitle}>
                            Santiago
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtitle}>
                        {form.tipo}
                    </Text>
                    <Text style={styles.subtitle}>
                        <Text style={{ fontWeight: "bold" }}> De: </Text>{form.de.del}
                    </Text>
                    <Text style={styles.subtitle}>
                        <Text style={{ fontWeight: "bold" }}> A: </Text>{form.a}
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
