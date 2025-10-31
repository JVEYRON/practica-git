import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const styles = StyleSheet.create({
  contenedorButton: {
      flex: 1,
      backgroundColor: '#ffffffff',
      alignItems: 'center',
      justifyContent: 'center',
  },

    contenedorA: {
      marginTop: 12,
      marginBottom: 10,
     },
    });
 let [resultado, setResultado] = useState('');

 const nummax = () => {
   resultado = (50 * (8 * 15));
   resultado = resultado + (0.02 * resultado);
   resultado = resultado - (0.015 *resultado);
   resultado = resultado - (0.012 *resultado);
  setResultado(resultado);
}  
  return (
<View style={styles.contenedorButton}>
    <Text> ganancias del trabajador</Text>
                <View style={styles.contenedorA}>
                <Button title="Tester"  onPress={nummax}/>
                </View>
                <Text>El salario neto del trabajador es: [ {resultado} ]</Text>
                  
   </View>

  );


}
