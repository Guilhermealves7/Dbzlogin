import React from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function login() {
 return (
   <View style={style.container}>
    <Animatable.View animation='fadeInLeft' delay={500} style={style.header}>
      <Text style={style.ms}>Bem-vindo(a), Miseravel</Text>
    </Animatable.View>
    <Animatable.View animation='fadeInUp' style={style.form}>
      <Text style={style.email}>Email</Text>
      <TextInput
      placeholder='Digite seu email!'
      style={style.inpt}
      
      />

  <Text style={style.email}>Senha</Text>
      <TextInput
      placeholder='Digite sua senha!'
      style={style.inpt}
      
      />

      <TouchableOpacity style={style.butao}>
        <Text style={style.txtbtn}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.butaor}>
        <Text style={style.txtbtnr}>Não tem conta ainda? Cadastre-se aqui, Verme!</Text>
      </TouchableOpacity>

    </Animatable.View>
   </View>
  );
}
const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffa500', 

  },
  header:{
    marginTop:'14%',
    marginBottom:'8%',
    paddingStart:'5%',

  },
  ms:{
    fontSize:30,
    color:'#fff',
    fontWeight:'bold',


  },
  form:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%',


  },
  email:{
    fontSize:22,
    marginTop:28,
  },
  inpt:{
    borderBottomWidth:1,
    height:40,
    marginBottom:12,
    fontSize:18,

  },
  butao:{
    backgroundColor:'#ffa500',
    width:"100%",
    borderRadius:4,
    paddingVertical:8,
    marginTop:14,
    justifyContent: 'center',
    alignItems: 'center',

  },
  txtbtn:{
    fontWeight:'bold',
    fontSize:20,
    color:'#fff',

  },
  butaor:{
    marginTop:14,
    alignSelf: 'center',

  },
  txtbtnr:{
    color:'black',
  }





})