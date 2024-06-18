import { View, Text ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CardProduto from '../../components/CardProduto';
import Imagem1 from "../../assets/image-removebg-preview.png";
import Imagem2 from "../../assets/image-removebg-preview (1).png";
import Imagem3 from "../../assets/image-removebg-preview (2).png";
import Imagem4 from "../../assets/image-removebg-preview (3).png";
export default function Home() {

  const[produtos,setProdutos] = useState([
    { id:1, nome: "Randall Park", valor:71,image:Imagem1},
    { id:2, nome: "Elijah Wood", valor:24,image:Imagem2 },
    { id:3, nome: "Mario", valor:47,image:Imagem3 },
    { id:4, nome: "Yvette Nicole ", valor:47,image:Imagem4 },
    
    ]);
  return (
    <ScrollView
    >
    <View style={styles.container}>
      <FlatList
      data={produtos}
      scrollEnabled={false}//desabilitado por conta de afetar o desempenho
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