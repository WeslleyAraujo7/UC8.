import { View, FlatList } from 'react-native';
import ContactCard from '../components/ContactCard';
import ContactDetails from './Information';
import { contactList } from '../constants/data.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function ContactListenScreen({navigation}) {
    return (

    <View>
        <FlatList>
            data = {contactList},
            keyExtractor = {(item) => item.id}
            renderItem={({ item }) => (
                <ContactCard item = { item } onPresse = { navigation.navigate('Detalhes', { item })}> </ContactCard>
            )}

        </FlatList>
    </View>

    )
}

export default function Contacts() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name='Lista de Pokemons'
                component={ContactListenScreen}
            />
            

            <Stack.Screen
                name=''
            />

        </Stack.Navigator>
    )
}