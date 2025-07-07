import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Alert } from 'react-native';

export default function AulaIntro() {

const [nome, setNome] = useState();

const mostrarAlerta = () => {
  Alert.alert(`Olá, bem vindo ${nome}`)
}

  return (
    <View style={styles.Container}>
        <Text style={styles.Text}>Aprendendo React aNative</Text>

        <TextInput 
        style={styles.Input} 
        placeholder ='Digite seu nome' 
        onChangeText={setNome} 
        value={nome} 
        styles />

        <Button 
        title='Click'
        onPress={mostrarAlerta}

        />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },

  Text: {
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold'
  },

  Input: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    margin: 10,
    width: '60%',
    color: 'white'
  },
})
