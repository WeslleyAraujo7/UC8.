import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles.js'


export default function Home() {
    return (
        <View style={styles.containerHome}>
            <Text style={styles.titulo}>Bem vindo ao APP</Text>
            <Image style={styles.avatar} source={require("../assets/14-shading.png")}></Image>


            <Text style={styles.subtitulo}>Navegue usando o menu lateral</Text>

        </View>
    )
}