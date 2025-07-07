import { View, Text, TextInput, Pressable, StyleSheet, Image, Alert, FlatList } from 'react-native';
import logo from "../assets/images/logo.png"
import { Colors } from '../constants/Colors';
import Task from '../components/Task';
import React, { useState } from 'react'

const initialTasks = [
  {id: 1, completed: true, text: "Estudar React Native"}
]


export default function ListaDeTarefas() {

  const [tasks, setTasks] = useState(initialTasks)
  const [text, setNewTask] = useState("")

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      completed: false,
      text,
    };
    setTasks([...tasks, newTask]);
    setNewTask('');
    Alert.alert("Tarefa Adicionada", `Você adicionou: ${text}`)
  }


  return (
    <View style={style.mainContainer}>
      <View style={style.flexContainer}>
        <Image style={style.imageStyle} source={logo} />
        <Text style={style.tituloText}> Minhas Tarefas </Text>
      </View>

        <View style={style.containerInput}>
          <TextInput 
          style={style.estiloInput} 
          placeholder='Adicionar Tarefa' 
          placeholderTextColor={'white'}
          onChangeText={setNewTask}
          value={text}/>

          <Pressable 
          onPress={addTask}
          style=
{({ pressed }) => [
            style.Pressionar, {
              backgroundColor: pressed ? 'white' : Colors.primary,
            },
          ]}>

{({ pressed }) => (
  <Text
    style={[
      style.textInput,
      {
        color: pressed ? "#40B7AD" : "#fff",
        fontWeight: pressed ? 'bold' : '500',
      },
    ]}> Adicionar </Text>
)}
          </Pressable>

          <FlatList
          style={style.listaAtividades}
          data={tasks}
          renderItem={({ item }) => (
            <Task text={item.text} initialCompleted={item.completed} />
          )}
          
          />
        </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    marginHorizontal: 15,
  },

  containerInput: {
    backgroundColor: Colors.corDeFundo,
    marginTop: 15,
    borderRadius: 10,
    paddingHorizontal: 20
  },

  estiloInput: {
    marginVertical: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    color: 'white'
  },

  flexContainer: {
    alignItems: 'center',
    // flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: Colors.corDeFundo,
    padding: 10,
    borderRadius: 10
  },

  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },

  tituloText: {
    color: Colors.corDeTexto,
    fontWeight: 'bold',
    fontSize: 20
  },

  Pressionar: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20
    // justifyContent: 'center'
  },

  textInput: {
    color: 'white',
    fontWeight: 'bold',
  },

  listaAtividades: {
    borderRadius: 10,
    width: 'auto',
    backgroundColor: '#4CD9CD',
    padding: 15,
    marginBottom: 15
   }
});