import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import {styles} from './styles';

const Input = ({label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setisPasswordVisible(!isPasswordVisible);
    };
    return (
       <View style={styles.container}>
         <View style={styles.container}>{label}</View>
        <View style={styles.inputContainer}>
            <TextInput
            secureTextEntry={isPassword && !isPasswordVisible}
            placeholder={placeholder}
            style={styles.input}
            />
            {isPassword ? (
                <Pressable onPress={onEyePress}>
                    <Image
                    style={styles.eye}
                    source={
                        isPasswordVisible
                        ? require('../../assets/eye.png')
                        : require('../../assets/eye_closed.png')
                    }
                    />
                </Pressable>
            ) : null }
            <ViewInput placeholder={placeholder} style={style.input}/>
        </View>
       </View>
    );
};
export default Input;