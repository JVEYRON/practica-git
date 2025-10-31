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
 let [num1, setnum1] = useState('');
 let [num2, setnum2] = useState('');
 let [resultado, setResultado] = useState('');

 const nummax = () => {
     if (num1 <  num2) {
    resultado = num1;
      setResultado(resultado);
} else (num1 > num2 ); {
    resultado = num2;
      setResultado(resultado)
} 
}
  

  
  return (
<View style={styles.contenedorButton}>
    <Text> Ingresa los 2 numeros</Text>
    <TextInput
            placeholder="Primer numero"
            value={num1}
            onChangeText={setnum1}
            keyboardType="numeric"
            
          />
          <TextInput 
            placeholder="Segundo numero"
            value={num2}
            onChangeText={setnum2}
            keyboardType="numeric"
          />
                <View style={styles.contenedorA}>
                <Button title="Tester"  onPress={nummax}/>
                </View>
                <Text>El numero menor es: [ {resultado} ]</Text>
                  
   </View>

  );


}