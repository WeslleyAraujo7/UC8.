import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "../../styles/styles";

export default function Products() {
    
    const { id } = useLocalSearchParams();

    return (

        <View style={[styles.container, {backgroundColor: "8afc93" }]}>
        <Text> Details Products </Text>
        <Text> Product: {id} </Text>
        </View>
    )
}