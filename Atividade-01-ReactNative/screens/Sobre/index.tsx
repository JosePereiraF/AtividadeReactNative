import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Sobre Nós</Text>
        <Text style={styles.description}>
          Bem-vindo à nossa loja de pelúcias! Somos apaixonados por trazer alegria e conforto através de nossas pelúcias de alta qualidade. Cada um de nossos produtos é escolhido com carinho para garantir que você encontre o amigo perfeito para abraçar e amar.
        </Text>
        <Text style={styles.description}>
          Nossa missão é proporcionar momentos de felicidade e ternura, seja para presentear alguém especial ou para adicionar um toque de fofura ao seu dia. Acreditamos que pelúcias são mais do que simples brinquedos, são companheiros que fazem parte de nossas vidas.
        </Text>
        <Text style={styles.description}>
          Obrigado por visitar nossa loja. Esperamos que você encontre exatamente o que procura e que nossas pelúcias tragam um sorriso ao seu rosto!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Cor branca com 80% de opacidade
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    color: '#666',
  },
});
