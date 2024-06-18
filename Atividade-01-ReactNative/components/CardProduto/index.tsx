import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

interface CardProdutoProps{
  imagem:string,
  valor:number,
  nome:string
}

export default function CardProduto({imagem,valor,nome}:CardProdutoProps ) {
 
  return (
    <View style={styles.container}>
      <Image 
      source={imagem=="imagem1"?require("../../assets/image-removebg-preview.png"):imagem=="imagem2"?require("../../assets/image-removebg-preview (1).png"):imagem=="imagem3"?require("../../assets/image-removebg-preview (2).png"):require("../../assets/image-removebg-preview (3).png")}
      style={{ width: 65, height: 85 }}
      />
        <Text>
        {nome}
        </Text>
        <Text>
            R${valor}.00
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 100,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 8, 
  },
});