import { View, TextInput, Button, Modal } from "react-native";
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
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={inputValue}
          onChangeText={onChangeText}
        />
        <View style={styles.buttonRow}>
          <View style={styles.buttonStyle}>
            <Button title="Add Goal" onPress={onAddGoal} />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
