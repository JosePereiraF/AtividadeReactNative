import { View, Text,Image } from 'react-native'
import React from 'react'


export default function CardProduto(imagem:string,valor:number,nome:string ) {
  return (
    <View>
      <Image 
      source={require(imagem)}
      style={{ width: 65, height: 65 }}
      />
        <Text>
        {nome}
        </Text>
        <Text>
            {valor}
        </Text>
    </View>
  )
}
