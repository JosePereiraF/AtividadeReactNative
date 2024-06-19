import { View,StyleSheet, Text, SafeAreaView, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import ActionModal from "../../components/ActionModal";

export default function Calculadora() {

    const[gasolina, setGasolina] = useState<number>(0);
    const[alcool, setAlcool] = useState(0);
    const[resultado, setResultado] = useState(0);
    const[mensagem, setMensagem] = useState('');

    function calcular (){
        setResultado(alcool/gasolina);
        setMensagem(resultado<0.7 ? "A recomendação é usar Alcool" : "A recomendação é usar Gasolina"); 
    }

  return (
    <SafeAreaView>
            <Text style={styles.title}>Qual a melhor opção?</Text>
            <TextInput value={gasolina.toString()}/>
            <TextInput value={alcool.toString()}/>

        <TouchableOpacity style={styles.buttton} >
            <Text>Calcular</Text>
        </TouchableOpacity>

        <Modal>
            <ActionModal/>
        </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121318",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
    },
    buttton: {
      backgroundColor: "#fff",
      padding: 4,
      marginVertical: 8,
      width: "70%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
    },
  });