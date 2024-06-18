import { View, Text,Image,StyleSheet, Button, ImageSourcePropType } from 'react-native'
import React from 'react'

interface CardProdutoProps{
  imagem:ImageSourcePropType,
  valor:number,
  nome:string
}

export default function CardProduto({imagem,valor,nome}:CardProdutoProps ) {
 
  return (
    <View style={styles.container}>
      <Image 
      source={imagem}
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
    width: 150,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 8, 
  },
});