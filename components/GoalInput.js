import { View, TextInput, Button } from "react-native";
import styles from "../styles/goalInputStyles";

export default function GoalInput({ inputValue, onChangeText, onAddGoal }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        value={inputValue}
        onChangeText={onChangeText}
      />
      <Button title="Add Goal" onPress={onAddGoal} />
    </View>
  );
}
