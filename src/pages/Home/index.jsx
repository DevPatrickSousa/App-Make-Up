import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Avatar, Icon,Button } from '@rneui/themed';
import ButtonComponent from "../../components/ButtonComponent"
export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      

      <Card style={styles.card} onPress={() => alert('teste')}>
        <Avatar
          name='face-woman-shimmer'
          type='MaterialCommunityIcons'
          color='#517fa4'
        />
        <Card.Title>Tutorial de primeira MakeUp</Card.Title>


        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component
          structure than actual design.
        </Text>

        
      </Card>

      <Card onPress={() => alert('teste')}>
        <Card.Title>Grave seus passos a passos</Card.Title>


        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component
          structure than actual design.
        </Text>

      </Card>

      <p></p>

      <ButtonComponent
      title="ATUALIZAR PERFIL"
      left={true}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  card: {
    width: 327,
    height: 182,
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 30
    

  }
  
});
