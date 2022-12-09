//imports

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@rneui/themed';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';


export default function Laws() {

    //import fonts

    const [loaded] = useFonts({
        nunito: require('../../assets/fonts/Nunito-VariableFont_wght.ttf'),
        nunitoItalic: require('../../assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
        montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
        OpenSans: require('../../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')
    });



    return (

        //creating cards with laws.

        <View style={styles.container}>
            <StatusBar style="auto" />


            <Text style={styles.text} >Lei Maria da Penha (11.340/2006)</Text>
            <Card containerStyle={styles.card}>
                <Text style={styles.cardContent} h2>
                    Cria mecanismos para coibir a violência doméstica e familiar contra a mulher e estabelece medidas de assistência e proteção.
                </Text>
            </Card>



            <Text style={styles.text}>Lei Carolina Dieckmann (12.737/2012)</Text>
            <Card containerStyle={styles.card}>
                <Text style={styles.cardContent} h2>
                    Tornou crime a invasão de aparelhos eletrônicos para obtenção de dados particulares.
                </Text>
            </Card>


            <Text style={styles.text}>Lei Joana Maranhão (12.650/2015)</Text>
            <Card containerStyle={styles.card}>
                <Text style={styles.cardContent} h2>
                    Alterou os prazos quanto a prescrição de crimes de abusos sexuais de crianças e adolescentes.
                    A prescrição passou a valer após a vítima completar 18 anos, e o prazo para denúncia aumentou para 20 anos.
                </Text>
            </Card>




        </View>
    );
}


//styling Laws page.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EA9AB2',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    card: {
        flex: 1,
        width: 327,
        height: 182,
        backgroundColor: '#EA9AB2',
        borderWidth: 2,
        borderRadius: 30,
        marginBottom: 10
    },
    text: {

        color: "#FFFFFF",
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: 20,
        marginTop: 35

    },
    cardContent: {
        flex1: 1,
        color: "#FFFFFF",
        fontFamily: 'nunito',
        fontWeight: 700,
        fontSize: 17,


    },
    moreInfo: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        textAlign: 'left',
        maxHeight: 20,
        color: "#FFFFFF",
        fontFamily: 'Nunito-MediumItalic',
        cursor: 'pointer',
        fontSize: 20,
    }
});
