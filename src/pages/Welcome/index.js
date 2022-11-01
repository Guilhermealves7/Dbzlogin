import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Welcome() {
 return (
   <View style={styles.Container}>
    <View style={styles.containerLogo}>
        <Text>cu</Text>


          <Image
            source={require('../../assets/logo1.jpg')}
           style={{width:'100%', height:'100%'}}
            resizeMode='contain'

        
          />
    </View>
    <View style={styles.containerText}>
     <Text style={styles.title}>Bem-Vindo, Verme Maldito!!!</Text>
     <Text>Logue para começar, seu Lixo!</Text>


    </View>

   </View>
  );
}

const styles= StyleSheet.create({
    Container:{

    },
    containerLogo:{

    }
})