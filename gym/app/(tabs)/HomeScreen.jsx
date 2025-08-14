import React, { useState, useRef, use } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  Animated,
  Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ theme, navigation }) {
  const [nome, setNome] = useState("");
  const [frequencia, setFrequencia] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const iniciarAnimacao = () => {
    scaleAnim.setValue(0.5);
    opacityAnim.setValue(0);

    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 250,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const registrarPresenca = () => {
    if(nome.trim() === "" ) return;

    const nomeAluno = nome.trim();

    const novoRegistro = {id: Date.now().toString(), nome: nomeAluno};

    setFrequencia([novoRegistro, ...frequencia])
    setNome('');

    navigation.navigate("CadastroEndereco", {alunoNome: nomeAluno})
  }

  const confirmarExclusao = (item) => {
    setItemSelecionado(item);
    setModalVisible(true);
    iniciarAnimacao();
  };

  const excluirItem = () => {
    setFrequencia(frequencia.filter((i) => i.id !== itemSelecionado.id));
    setModalVisible(false);
    setItemSelecionado(null);
  }

  return(
    <View>
        <Text>
            Registro de Frequencia da Academia
        </Text>

        <TextInput
        placeholder="Digite o nome do aluno"
        value={nome}
        onChangeText={setNome}
        />

        <Button title='Registrar Presença' onPress={registrarPresenca}/>

        <FlatList
            data={frequencia}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>(
                <View>
                    <Text>{item.nome}</Text>
                    <TouchableOpacity onPress={() => confirmarExclusao(item)}>
                        <Ionicons name="trash" size={22} color='red'/>
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>
  )





}
