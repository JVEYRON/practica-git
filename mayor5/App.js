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
 const [num1, setnum1] = useState('');
 const [num2, setnum2] = useState('');
 const [num3, setnum3] = useState('');
 const [num4, setnum4] = useState('');
 const [num5, setnum5] = useState('');
 const [resultado, setResultado] = useState('');

 const nummax = () => {
     if (num1>num2&num1>num3&num1>num4&num1>num5) {
    const resultado = parseFloat(num1)*1;
      setResultado(resultado)
} else if (num2>num1&num2>num3&num2>num4&num2>num5) {
  const resultado = parseFloat(num2)*1;
      setResultado(resultado)
} else if (num3>num1&num3>num2&num3>num4&num3>num5) {
   const resultado = parseFloat(num3)*1;
      setResultado(resultado)
} else if (num4>num1&num4>num2&num4>num3&num4>num5) {
   const resultado = parseFloat(num4)*1;
      setResultado(resultado)
} else {
const resultado = parseFloat(num5)*1;
      setResultado(resultado)
} 
}
  

  
  return (
<View style={styles.contenedorButton}>
    <Text> Ingresa los 5 numeros</Text>
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
          <TextInput
            placeholder="Tercer numero"
            value={num3}
            onChangeText={setnum3}
            keyboardType="numeric"
            
          />
                <TextInput 
                  placeholder="Cuarto numero"
                  value={num4}
                  onChangeText={setnum4}
                  keyboardType="numeric"
                />
                <TextInput
                placeholder="Quinto numero"
                  value={num5}
                  onChangeText={setnum5}
                  keyboardType="numeric"
                />
                <View style={styles.contenedorA}>
                <Button title="Tester"  onPress={nummax}/>
                </View>
                <Text>El numero mayor es: [ {resultado} ]</Text>
                  
   </View>

  );


}
