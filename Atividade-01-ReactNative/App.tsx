import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //criar 4 telas usando index e css, pelo menos 2 componets, um estilo de navegação(usar botoes para a navegação)
  // o que vai ser a aplicação possiveis telas(Home,Login,Sobre,Ajuda)
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
