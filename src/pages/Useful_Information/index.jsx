import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Avatar, Icon, Button } from '@rneui/themed';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
export default function UsefulInformations() {

  const [loaded] = useFonts({
    nunito: require('../../assets/fonts/Nunito-VariableFont_wght.ttf'),
    nunitoItalic: require('../../assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    OpenSans: require('../../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')
  });

  const [myText, setMyText] = useState("My Original Text");
  const [myText1, setMyText1] = useState("teste");
  
  function showText(){
    
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.moreInfo} onPress = {() => {setMyText("My Changed Text");setMyText1("teste1")}}>Mais informações</Text>

      <Text style={styles.text} >{myText}</Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardContent} h2>
          180
        </Text>
      </Card>



      <Text style={styles.text}>{myText}</Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardContent} h2>
          190
        </Text>
      </Card>


      <Text style={styles.text}>{myText1}</Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardContent} h2>
          193
        </Text>
      </Card>

      <Text style={styles.text}>Tela info</Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardContent} h2>
          0800 773 4340
        </Text>
      </Card>

      <Text style={styles.text}>Tela info</Text>
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
  moreInfo:{
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf:'flex-start',
    textAlign:'left',
    maxHeight: 20,
    color: "#FFFFFF",
    fontFamily: 'Nunito-MediumItalic',
    cursor: 'pointer',
    fontSize: 20,
  }
});
