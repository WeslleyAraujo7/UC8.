import { Tabs } from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      headerStyle: { backgroundColor: "#e94560" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "white",
      tabBarActiveBackgroundColor: "#ad3145",
      tabBarInactiveBackgroundColor: "#e94560",
      tabBarStyle: {
        padding: 100,
        fontWeight: 'bold'
      },
    }}>
      <Tabs.Screen 
      name="index" 
      options={{title: 'Home', 
      tabBarIcon: ({ color }) => (<Ionicons name="home-outline" size={24} color="white"/>)}}
      />
      <Tabs.Screen 
      name="user" 
      options={{title: 'User', tabBarIcon: ({ color }) => (<FontAwesome name="user-o" size={24} color="white" />)}}
      />
      <Tabs.Screen 
      name="settings" 
      options={{title: 'Settings', tabBarIcon: ({ color }) => (<Ionicons name="settings-outline" size={24} color="white" />)}}
      />
      <Tabs.Screen 
      name="search" 
      options={{title: 'Search', tabBarIcon: ({ color }) => (<AntDesign name="search1" size={24} color="white" />)}}
      />
    </Tabs>
  )
}