import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  const navigation= useNavigation();

 return (
   <View style={styles.container }>
    <View style={styles.containerLogo}>
        
        

          <Animatable.Image
          animation='flipInY'
            source={require('../../assets/logo1.jpg')}
           style={{width:'100%', height:250 }}
           resizeMode='contain'
           
        
            

        
          />
    </View>
    <Animatable.View  delay={900} animation='fadeInUp' style={styles.containerText}>
     <Text style={styles.title}> Bem-Vindo, Verme Maldito!!!</Text>
     <Text style={styles.text}>Logue para começar, seu lixo!</Text>

     <TouchableOpacity style={styles.butao}
     onPress={()=>navigation.navigate('Login')}
     >
      <Text style={styles.txtbtn}>Acessar</Text>
     </TouchableOpacity>

     
    </Animatable.View>

   </View>
  );
}

const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ffa500',
    },
    containerLogo:{
      flex:2,
      backgroundColor:'#ffa500',
      justifyContent: 'center',
      alignItems: 'center',
    

    },
    containerText:{
      flex:1,
      backgroundColor:'#fff',
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      paddingStart:'5%',
      paddingEnd:"5%",



    },
    title:{
      fontSize:25,
      fontWeight:'bold',
      marginTop:28,
      marginBottom:12,

    },
    text:{
      color: 'black',
      fontSize:17,
    },
    butao:{
      position:'absolute',
      backgroundColor:'#ffa500',
      borderRadius:50,
      paddingVertical:8,
      width:'60%',
      alignSelf: 'center',
      bottom:'15%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txtbtn:{
      fontSize:20,
      color:'#fff',
      fontWeight:'bold',
    }
})