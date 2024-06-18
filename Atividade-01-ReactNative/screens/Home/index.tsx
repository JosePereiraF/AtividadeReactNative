import { View, Text ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import CardProduto from '../../components/CardProduto';

export default function Home() {

  const[produtos,setProdutos] = useState([
    { id:1, nome: "Jorge", valor:71,image:"../../assets/image-removebg-preview.png" },
    { id:2, nome: "Jonas", valor:24,image:"image-removebg-preview (1).png" },
    { id:3, nome: "Georg", valor:47,image:"image-removebg-preview (2).png" },
    { id:4, nome: "Ricks", valor:21,image:"image-removebg-preview (3).png" },
    ]);
  return (
    <View>
        <FlatList
data={produtos}
renderItem={({ item })=>{
  return <CardProduto />
}}
/>
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