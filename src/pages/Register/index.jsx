//imports

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import InputComponent from '../../components/InputComponent/index';
import ButtonComponent from "../../components/ButtonComponent/index";
import api from '../../Services/api'
import axios from 'axios';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function Register() {

  //declaring function to register people data.
  const [userName, setName] = useState(' ');
  const [age, setAge] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [number, setNumber] = useState(' ');
  var tokenAuth = '';
  

  function getToken() {

    return new Promise((resolve, reject) => {

        let optionToken = {
            headers: { "authentication": "4dm1n" }
        }

        api.get('/getToken?t=4dm1n', optionToken
        ).then(
            response => {
                tokenAuth = response.data.token
                resolve(tokenAuth)
            }
        )
    })
}

  const navigation = useNavigation();
  function goToHomePage() {
    navigation.navigate('Home');
  }

  function cleanInputs() {
    setName(' ');
    setAge(' ');
    setEmail(' ');
    setPassword(' ');
    setNumber(' ');
  }

  


  const userRegister = async () => {
    var tokenAuth = await  getToken();
    console.log(tokenAuth + 'teste')
    let option = { headers: { 'Content-Type': ['application/json'], 'authorization': 'Bearer ' + tokenAuth } }
    await api.post('/registration?key=4dm1n',{
    nome:userName,
    idade:age,
    email:email,
    senha:password,
    telefone:number,
  }, option).then(function (response) {
    console.log(response);
    alert('USUÁRIO REGISTRADO!')
  })
  .catch(function (error) {
    console.log(error);
  });
  


    
    
  }


  /* const userRegister = () => {
     
 
       console.log(userName);
       console.log(age);
       console.log(email);
       console.log(password);
       console.log(number);
       alert('ok')
       
   }
 */

  return (
    <View style={styles.container}>


      <StatusBar style="auto" />

      <Avatar.Icon icon="account" color="black" style={styles.logo} />

      <form className='formRegister'>



        <InputComponent
          leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
          label='Nome'
          placeholder='Digite o seu nome'
          onChange={(e) => setName(e.target.value)}
          secureTextEntry={false}
        />

        <InputComponent
          label='Idade'
          placeholder='Digite a sua idade'
          onChange={(e) => setAge(e.target.value)}
          secureTextEntry={false}
        />

        <InputComponent
          label='Email'
          placeholder='Digite o seu email'
          onChange={(e) => setEmail(e.target.value)}
          secureTextEntry={false}
        />


        <InputComponent
          label='Senha'
          placeholder='Digite a sua senha'
          onChange={(e) => setPassword(e.target.value)}
          secureTextEntry={true}
        />

        <InputComponent
          label='Tel.:'
          placeholder='Digite o seu telefone para contato'
          onChange={(e) => setNumber(e.target.value)}
          secureTextEntry={false}
        />

        <ButtonComponent
          title="Cadastrar Dados"
          onPress={()=>{userRegister();cleanInputs();}} // when the button is clicked, data is registered in the data base.
          
          
        />
      </form>
    </View>
  );
}

//styling Register page.

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


