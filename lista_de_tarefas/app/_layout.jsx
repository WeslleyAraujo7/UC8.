import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import logo from "../assets/images/logo.png"
import { Colors } from '../constants/Colors';

export default function ListaDeTarefas() {


  return (
    <View style={style.mainContainer}>
      <View style={style.flexContainer}>
        <Image style={style.imageStyle} source={logo} />
        <Text style={style.tituloText}> Minhas Tarefas </Text>
      </View>

        <View style={style.containerInput}>
          <TextInput style={style.estiloInput} placeholder='Adicionar Tarefa' placeholderTextColor={'white'}/>

          <Pressable style={({pressed}) => [
            style.Pressionar, {
              backgroundColor: pressed ? 'white' : Colors.primary,
            },
          ]}
          
          >
              <Text style={style.textInput}>Adicionar</Text>
          </Pressable>
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
  }
});