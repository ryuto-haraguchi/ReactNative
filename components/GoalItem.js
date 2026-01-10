import { View, Text } from "react-native";
import styles from "../styles/goalItemStyles";

export default function GoalItem({ text }) {
  return (
    <View>
      <Text style={styles.goalItem}>{text}</Text>
    </View>
  );
}
