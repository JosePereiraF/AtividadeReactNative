import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const emailCerto = "jonas@gmail.com";
  const senhaCerta = "123";
  const [logado, setLogado] = useState('');


  const login = () => {
    if (email === '' || senha === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    } else if (email === emailCerto && senha === senhaCerta){
      setLogado('Jonas');
      Alert.alert('Bem vindo');
      return;
    }else{
      Alert.alert('Senha Incorreta');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Login" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
});
