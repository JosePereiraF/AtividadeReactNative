import { View, Text,StyleSheet,Image, Button, ImageSourcePropType } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Sobre from '../../screens/Sobre';

interface CardAjudaProps{
    imagem:ImageSourcePropType,
    texto:string
  }
export default function CardAjuda({imagem,texto}:CardAjudaProps) {
  const navigation = useNavigation();
 function trocarTela(local:string){
  local =="Sobre nós"?navigation.jumpTo("Sobre"):""
 }
 return (
    <View style={styles.container}>
      <Image 
      source={imagem}
      style={{ width: 120, height: 100 }}
      />
      <TouchableOpacity style={styles.button} onPress={()=>trocarTela(texto)} >
        <Text>
          {texto}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 8, 
    marginHorizontal:20
  },
  button: {
    backgroundColor: "gray",
    padding: 4,
    marginTop:3
  },
});