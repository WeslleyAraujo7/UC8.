import { View, Text, TextInput, Pressable, Animated } from 'react-native';
import styles from './style'
import { useState, useRef, useEffect } from 'react';
import ResultIMC from './ResultImc';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e a altura.');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    const slideAnim = useRef(new Animated.Value(100)).current;

    const fadeAnim = useRef(new Animated.Value(0)).current;

    //EXECUTA ANIMAÇÃO
    useEffect(() => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),

            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            })
        ]).start();
    }, [slideAnim, fadeAnim])

    function imcCalculator() {
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);
        return (weightNum / (heightNum * heightNum)).toFixed(2);
    }

// FUNÇÃO DE VALIDAÇÃO
    function validationImc() {
        if (weight != null && height != null) {
            const calculatedImc = imcCalculator()
            setImc(calculatedImc)
            setHeight(null);
            setWeight(null);
            setMessageImc('Seu IMC é igual a: ');
            setTextButton('Calcular novamente');
            return;
        }
        setImc(null)
        setTextButton('Calcular IMC');
        setMessageImc('Preencha o peso e a altura.');
    }

    return (
        <Animated.View
        style={[
            styles.formContainer, {
                opacity: fadeAnim,
                transform: [{
                    translateY: slideAnim
                }],
            },
        ]}
        >
        <View style={styles.form}>
            <Text style={styles.label}>Altura (cm)</Text>
            <TextInput 
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder='Ex: 1.70m'
            keyboardType='numeric'
            />

            <Text style={styles.label}>Peso (kg)</Text>
            <TextInput 
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder='Ex: 70kg'
            keyboardType='numeric'
            />

            <Pressable 
            style={styles.buttonCalculator}
            onPress={() => validationImc()}>
                <Text style={styles.buttonCalculatorText}>{textButton}</Text>
            </Pressable>

            <ResultIMC messageResultImc={messageImc} resultIMC={imc} />
        </View>
        </Animated.View>
    )
}