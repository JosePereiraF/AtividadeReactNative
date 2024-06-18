import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';

export default function App() {
  //criar 4 telas usando index e css, pelo menos 2 componets, um estilo de navegação(usar botoes para a navegação)
  // o que vai ser a aplicação possiveis telas(Home,Login,Sobre,Ajuda)
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}


