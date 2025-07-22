import { Drawer, StatusBar } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';

const CustomDrawerContent = () => {
    const router = useRouter();
    return (
        <DrawerContentScrollView>
            <DrawerItem 
            label="Perfil"
            onPress={() => router.push("/perfil")}
            />
        </DrawerContentScrollView>
    )
}

export default function RootLayout() {
    return (
        <>
            <StatusBar backGroundColor='#e94560'/>
            <Drawer 
                DrawerContent={() => <CustomDrawerContent/>}
            >
             
            </Drawer>
        </>
    )
}


