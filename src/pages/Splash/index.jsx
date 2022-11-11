import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function Splash() {
  const [loaded] = useFonts({
    nunito: require('../../assets/fonts/Nunito-VariableFont_wght.ttf'),
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf')
  });


  return (



    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.minha}>MINHA</Text>
      <hr />
      <Text style={styles.makeUp}>Makeup</Text>

      <Image source={require('../../assets/testeIcon.png')}
        style={{ width: 400, height: 400 }} />

      <Text style={styles.santanaParnaiba}>Santana de Parnaíba</Text>
      <Text style={styles.saoPaulo}>São Paulo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  makeUp: {
    fontFamily: 'nunito',
    fontSize: 48,
    color: '#E0678B',
    textShadowColor: '#0000', textShadowOffset: { width: '0px', height: '4px', blur:'4px' }
  },
  santanaParnaiba: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
    color: '#FFFF'
  },
  saoPaulo: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: '#FFFF'
  },
  minha:{
    fontFamily: 'Montserrat-Regular',
    fontSize:48,
    letterSpacing: '10px',
    lineHeight: '30px',
    color: '#EFCFE3',
    textShadowColor: '#0000', textShadowOffset: { width: '0px', height: '4px', blur:'4px' },
    opacity: 0.98
  }
});
