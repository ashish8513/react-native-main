import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './src/screens/CustomComponent.jsx';

export default function App() {
  const myName = "ashish prabhakar"
  const getFullName = (firstNmae, secondName) => {
    return `my name is ${firstNmae} ${secondName}`
  }
  return (
    <View style={styles.container} >
      <Text style={styles.textstyleOne}> welcome to Ashish tech world </Text>
      <Text style={styles.textstyletwo}> hi , {getFullName("ashish", "prabhakar")} </Text>
      <Text style={styles.textstyleThree}> hello world {myName} </Text>
      <CustomComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001214',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyleOne: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  textstyletwo: {
    color: "blue"
  },
  textstyleThree: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'normal',
  }

});
