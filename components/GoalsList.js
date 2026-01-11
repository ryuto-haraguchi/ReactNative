import { View, Text, FlatList } from "react-native";
import GoalItem from "./GoalItem";
import styles from "../styles/goalsListStyles";

export default function GoalsList({ goals, deleteGoalHandler }) {
  return (
    <View style={styles.goalsContainer}>
      <Text style={styles.goalsTitle}>List of Goals</Text>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <GoalItem
              text={item.value}
              onDelete={() => deleteGoalHandler(item.key)}
            />
          );
        }}
      />
    </View>
  );
}
