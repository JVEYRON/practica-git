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
 const [resultado, setResultado] = useState('');
    const [paga, setPaga] = useState('14');
   const [horas, setHoras] = useState('');
   const [horasextra, setHorasextra] = useState('');
   let [sueldo, setSueldo] = useState('');
 const salario = () => {
   
    if (horas <= 40) {
          const sueldo = horas * paga;
          const resultado = sueldo;
          setResultado(resultado);
        }
         if (horas > 40) {
         sueldo = 40 * paga;
         const horasextra = horas - 40;
         sueldo = sueldo + (horasextra * 26);
         const resultado = sueldo;
          setResultado(resultado+" 'Incluido Horas Extra.'");
         } 

    }
  return (
<View style={styles.contenedorButton}>
<TextInput
            placeholder="Horas trabajadas"
            value={horas}
            onChangeText={setHoras}
            keyboardType="numeric"
            
          />
    <Text> ganancias del trabajador</Text>
                <View style={styles.contenedorA}>
                <Button title="Tester"  onPress={salario}/>
                </View>
                <Text>El salario del trabajador es: [ {resultado} ]</Text>
                  
   </View>

  );


}