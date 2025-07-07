import { View, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import React, { useState } from "react"
import { Colors } from "../constants/Colors";

export default function Task({ text, initialCompleted }) {
    const [completed, setCompleted] = useState(initialCompleted)


    return (
        <View style={styles.rowContainer}>
            <Pressable onPress={() => setCompleted(!completed)}>
                <Ionicons name="checkmark-circle" size={32} color={completed ? 'green' : 'white'} />
            </Pressable>

            <Text>
                {text}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
       },
})