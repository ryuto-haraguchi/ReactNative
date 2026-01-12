import { View, TextInput, Button, Modal, Image } from "react-native";
import styles from "../styles/goalInputStyles";

export default function GoalInput({
  inputValue,
  onChangeText,
  onAddGoal,
  onCancel,
  visible,
}) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.img}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor={"#fff"}
          value={inputValue}
          onChangeText={onChangeText}
        />
        <View style={styles.buttonRow}>
          <View style={styles.buttonStyle}>
            <Button title="Add Goal" onPress={onAddGoal} color="#5e0acc" />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" onPress={onCancel} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
