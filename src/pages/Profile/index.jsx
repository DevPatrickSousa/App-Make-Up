//imports

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import InputComponent from '../../components/InputComponent/index';
import ButtonComponent from "../../components/ButtonComponent/index";

export default function Profile() {

  //declaring function to Update people data.

  function UpdatingData() {
    alert('teste')
  }
  return (
    <View style={styles.container}>


      <StatusBar style="auto" />

      <Avatar.Icon icon="account" color="black" style={styles.logo} />


      <InputComponent
        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        label='Nome'
        placeholder='Digite o seu nome'

      />

      <InputComponent
        label='Idade'
        placeholder='Digite a sua idade'
      />

      <InputComponent
        label='Email'
        placeholder='Digite o seu email'
      />


      <InputComponent
        
        label='Senha'
        placeholder='Digite a sua senha'
        
      />

      <InputComponent
        label='Tel.:'
        placeholder='Digite o seu telefone para contato'
      />

      <ButtonComponent
        title="Salvar Dados"
        onPress={UpdatingData } // when the button is clicked, the data updates in the data base.

      />

    </View>
  );
}

//styling Profile page.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  logo: {
    backgroundColor: "#FFF",
    shadowColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    marginHorizontal: 5,
    marginVertical: 10,

  },






});


