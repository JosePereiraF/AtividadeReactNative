import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Sobre() {
  //colocar um arrray para controlar as informações a serem mostradas ou usar um TEXT

  return (
    <View>
      <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam. Harum sed porro sint similique voluptas autem expedita aliquam! Ipsa eius odit, fugiat voluptates sed deleniti accusamus! Vitae, numquam neque!</Text>
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