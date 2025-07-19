import { Text, View, Pressable, StyleSheet } from "react-native";
import { styles } from "../../styles/styles";
import { router, Link } from "expo-router";


export default function Products() {
    
    const goToHome = () => {
        router.navigate('/')
    }

    return (

       <View style={[styles.container, {backgroundColor: "#12abf7ff"}]}>
        <Text>Products Screen</Text>

        <Link push href={'/products/1'}>Produto 1</Link>
        <Link push href={'/products/2'}>Produto 2</Link>
        <Link push href={'/products/3'}>Produto 3</Link>

       <Pressable 
       onPress={goToHome}
       style={stylesProduct.botaoVoltar}>
        <Text style={stylesProduct.textBotaoVoltar}>Home</Text>
       </Pressable>
       </View> 

    )
}

const stylesProduct = StyleSheet.create({
    botaoVoltar: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        marginTop: 15,
    },
    textBotaoVoltar: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})