import { StyleSheet, Text, TextInput, View } from "react-native";
import { style as styles } from "./styles";  // Thay đổi ở đây từ styles sang style
import { useState } from "react";

const ViewComponent = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhap ho ten"
        style={styles.tiStyle}
      />

      <Text style={styles.baseText}>
        Em vao doi bang {' '}
        <Text style={[styles.boldText, ColorText('red')]}>Vang doc</Text>
      </Text>
    </View>
  );
};

export default ViewComponent;

const ColorText = (color) => ({
  color,
});
