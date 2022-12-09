import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import InputComponent from '../../components/InputComponent/index';
import ButtonComponent from "../../components/ButtonComponent/index";

export default function EmergencyContacts() {
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
        label='Tel.:'
        placeholder='Digite o seu telefone para contato'
      />

      <ButtonComponent
        title="Contato 1"
        right={true}
      />

    </View>
  );
}

//styling the emergency_Contacts page.

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


