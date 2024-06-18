import { View, Text ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CardProduto from '../../components/CardProduto';

export default function Home() {

  const[produtos,setProdutos] = useState([
    { id:1, nome: "Randall Park", valor:71,image:"imagem1" },
    { id:2, nome: "Elijah Wood", valor:24,image:"imagem2" },
    { id:3, nome: "Mario", valor:47,image:"imagem3" },
    { id:4, nome: "Yvette Nicole ", valor:47,image:"imagem4" },
    
    ]);
  return (
    <ScrollView
    >
    <View style={styles.container}>
      <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item})=>{
        return <CardProduto
        valor={item.valor}
        nome={item.nome}
        imagem={item.image}
        />
      }}
      />
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    alignItems:"center"
  },
});