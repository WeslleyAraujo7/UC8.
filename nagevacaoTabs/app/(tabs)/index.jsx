import { View, Text } from 'react-native'
import { Link } from 'expo-router'

export default function Home() {
    return (
        <View>
            <Text>Home</Text>  
            <Link href={'/products/roupas'}> Ir para roupas </Link>
  
        </View>
    )
}