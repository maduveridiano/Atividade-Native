import React from 'react'
import { Text, View, StyleSheet, BackHandler, Pressable, TextInput } from 'react-native'
import { LinearGradient} from 'expo-linear-gradient'

const PrimeiraPagina = function () {
  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [resultado, setResultado] = React.useState('');
  const somar = function () {
    if (number1 != '' && number2 != '')
      setResultado(parseFloat(number1) + parseFloat(number2))
    else
      setResultado('Digite os valores, por favor')
  }
  const subtrair = function () {
    if (number1 != '' && number2 != '')
      setResultado(number1 - number2)
    else
      setResultado('Digite os valores, por favor')
  }
  const dividir = function () {

    if (parseFloat(number2) === 0)
      setResultado('Não é possível fazer divisão por zero')
    else if (number1 != '' && number2 != '')
      setResultado(number1 / number2)
    else
      setResultado('Digite os valores, por favor')
  }
  const multiplicar = function () {
    if (number1 != '' && number2 != '')

      setResultado(number1 * number2)
    else
      setResultado('Digite os valores, por favor')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.inputGroup}>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Valor 1' value={number1} onChangeText={setNumber1} />
        <TextInput style={styles.input}keyboardType='numeric' placeholder='Valor 2' value={number2} onChangeText={setNumber2} />
      </View>
      <View style={styles.buttonGroup}>
        <Pressable style={styles.button} onPress={somar}><Text style={styles.symbol}>+</Text></Pressable>
        <Pressable style={styles.button} onPress={subtrair}><Text style={styles.symbol}>-</Text></Pressable>
        <Pressable style={styles.button} onPress={dividir}><Text style={styles.symbol}>÷</Text></Pressable>
        <Pressable style={styles.button} onPress={multiplicar}><Text style={styles.symbol}>x</Text></Pressable>
      </View>
      <Text style={styles.result}>{resultado}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 20,
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 55,
    textAlign: 'center',
    fontWeight: '300',
  },
  buttonGroup:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  button:{
    backgroundColor: '#BDC1F2',
    height: 45,
    textAlign: 'center',
    borderRadius: 5,
    width: '17%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input:{
    backgroundColor: '#DDDCE6',
    margin: 10,
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    width: '33%',
    fontSize: 23,
  },
  result: {
    marginTop: 15,
    fontSize: 40,
    fontWeight: '500',
  },

  symbol: {
    fontSize: 28,
    fontWeight: '300',
  },

});

export default PrimeiraPagina;