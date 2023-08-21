import { ActivityIndicator, StatusBar, View } from 'react-native';
import { NewGroup } from '@screens/NewGroup';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';

export default function App() {

  /**
   * O carregamento das fonts é assincrono
   */
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })



  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}


