import { StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

const ViewComponent = () =>{
const [name, setName] = useState('');

  return(
    <View style = {style.container}>
      <TextInput value={name}
      onChangeText={setName}
      placeholder="Nhap ho ten"
      style={styles.tiStyle}
      />

      
         <Text style = {style.baseText}>
          Em vao doi bang {' '}
         <Text style = {[style.boldText, ColorText('red')]}>Vang doc</Text>
         </Text>
    </View>
  );
};
export default ViewComponent;
const ColorText = (color)=>({
   color,
})