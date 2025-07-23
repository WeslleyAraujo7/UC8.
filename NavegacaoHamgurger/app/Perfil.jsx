import { Text, View, Image } from 'react-native';
import { styles } from '../styles/styles.js'

export default function Perfil() {
    return (
        <View style={styles.containerPerfil}>
            <Image style={styles.avatar} source={require('../assets/14-shading.png')}/>

            <Text style={styles.nomeUsuario}>Mateus Irineu</Text>

            <Text style={styles.descricaoUsuario}>Aluno do  SENAC de Informática</Text>

            <View style={styles.divisor}/>
        </View>
    )
}