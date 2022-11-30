//imports

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@rneui/themed';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';


export default function UsefulInformations() {

  //import fonts

  const [loaded] = useFonts({
    nunito: require('../../assets/fonts/Nunito-VariableFont_wght.ttf'),
    nunitoItalic: require('../../assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    OpenSans: require('../../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')
  });

  //declaring hooks - useState

  const [myFirstText, setMyFirstText] = useState("N° de colaboradores para te atender");
  const [mySecondText, setMySecondText] = useState("N° de tonalidades de pele");
  const [myThirdText, setMyThirdText] = useState("Departamento de moda");
  const [myFourthText, setMyFourthText] = useState("Central de atendimento");
  const [myFifthText, setMyFifthText] = useState("Reclame aqui");
  const [hideText, setHideText] = useState(false);

  //function to show the SOS numbers.

  function showMoreInformation() {
    setMyFirstText("Central de atendimento a mulher");
    setMySecondText("Polícia militar")
    setMyThirdText("Bombeiros")
    setMyFourthText("Defensoria pública")
    setMyFifthText("Disque denúncia")
    setHideText(true)
  }

  //function to hide the SOS numbers.

  function showLessInformation() {
    setMyFirstText("N° de colaboradores para te atender");
    setMySecondText("N° de tonalidades de pele")
    setMyThirdText("Departamento de moda")
    setMyFourthText("Central de atendimento")
    setMyFifthText("Reclame aqui")
    setHideText(false)
  }

  return (

    //using the state "hideText" to show/hide the SOS numbers depending on the status true or false.

    <View style={styles.container}>
      <StatusBar style="auto" />
      {hideText
        ?
        <Text style={styles.moreInfo} onPress={showLessInformation}>Menos informações</Text>
        :
        <Text style={styles.moreInfo} onPress={showMoreInformation}>Mais informações</Text>
      }


      <Text style={styles.text} >{myFirstText}</Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardContent} h2>
          180
        </Text>
      </Card>



      <Text style={styles.text}>{mySecondText}</Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardContent} h2>
          190
        </Text>
      </Card>


      <Text style={styles.text}>{myThirdText}</Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardContent} h2>
          193
        </Text>
      </Card>

      <Text style={styles.text}>{myFourthText}</Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardContent} h2>
          0800 773 4340
        </Text>
      </Card>

      <Text style={styles.text}>{myFifthText}</Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardContent} h2>
          181
        </Text>
      </Card>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  card: {

    width: 327,
    height: 50,
    backgroundColor: '#EA9AB2',
    borderWidth: 2,
    borderRadius: 30,

  },
  text: {

    color: "#FFFFFF",
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 20,

  },
  cardContent: {

    color: "#FFFFFF",
    fontFamily: 'nunito',
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
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
