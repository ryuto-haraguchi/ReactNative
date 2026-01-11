import { View, Text, Pressable } from "react-native";
import styles from "../styles/goalItemStyles";

export default function GoalItem({ text, onDelete }) {
  return (
    <Pressable onPress={onDelete}>
      <View>
        <Text style={styles.goalItem}>{text}</Text>
      </View>
    </Pressable>
  );
}
