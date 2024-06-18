import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CardAjuda from '../../components/CardAjuda';

export default function Ajuda() {
  const[cards,setCards] = useState([
    { id:1, texto: "Sobre nós", image:"imagem1" },
    { id:2, texto: "Fale Connosco", image:"imagem2" },
    { id:3, texto: "Chat Bot",image:"imagem3" },
    { id:4, texto: "Avaliação",image:"imagem4" },
    
    ]);
  return (
    <ScrollView>
    <View style={styles.container}>
        <FlatList
        contentContainerStyle={styles.card}
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>{
          return <CardAjuda texto={item.texto} imagem={item.image}/>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    alignItems:"center",
    justifyContent:"center",
    paddingVertical: 20,
    paddingHorizontal:30,
  }
});