import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Sobre() {
  //colocar um arrray para controlar as informações a serem mostradas ou usar um TEXT

  return (
    <View>
      <Text>Sobre</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});