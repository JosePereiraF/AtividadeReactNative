import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CardAjuda from '../../components/CardAjuda';
import ImageAvaliacao from '../../assets/IconeAvaliação.png'
import imageSobre from '../../assets/sobreNós.png'
import imageSac from '../../assets/IconeFaleConnosco.png'
import imageBot from '../../assets/IconeChatBot.png'
export default function Ajuda() {
  const[cards,setCards] = useState([
    { id:1, texto: "Sobre nós", image:imageSobre },
    { id:2, texto: "Fale Connosco", image:imageSac },
    { id:3, texto: "Chat Bot",image:imageBot },
    { id:4, texto: "Avaliação",image:ImageAvaliacao },
    
    ]);
  return (
    <ScrollView>
    <View style={styles.container}>
        <FlatList
        scrollEnabled={false}
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