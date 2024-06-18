import { View, Text,StyleSheet,Image, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Sobre from '../../screens/Sobre';

interface CardAjudaProps{
    imagem:string,
    texto:string
  }
export default function CardAjuda({imagem,texto}:CardAjudaProps) {
  const Stack = createNativeStackNavigator();
function trocarTela(){
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Sobre' component={Sobre}/>
    </Stack.Navigator>
  </NavigationContainer>
}
 return (
    <View style={styles.container}>
      <Image 
      source={imagem=="imagem1"?require("../../assets/sobreNós.png"):imagem=="imagem2"?require("../../assets/IconeFaleConnosco.png"):imagem=="imagem3"?require("../../assets/IconeChatBot.png"):require("../../assets/IconeAvaliação.png")}
      style={{ width: 120, height: 100 }}
      />
        {/* <Button title={texto}  /> */}
      <TouchableOpacity style={styles.button} onPress={trocarTela}>
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