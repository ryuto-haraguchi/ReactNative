import { View, Text, Pressable } from "react-native";
import styles from "../styles/goalItemStyles";

export default function GoalItem({ text, onDelete }) {
  return (
    <View>
      <Pressable
        onPress={onDelete}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
      >
        <Text style={styles.goalItem}>{text}</Text>
      </Pressable>
    </View>
  );
}
