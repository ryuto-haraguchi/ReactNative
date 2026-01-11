import { View } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";
import styles from "./styles/appStyles";

export default function App() {
  const [inputState, setInputState] = useState("");
  const [goalsState, setGoalsState] = useState([]);

  const addGoalHandler = () => {
    setGoalsState((prev) => [
      ...prev,
      { value: inputState, key: Math.random().toString() },
    ]);
    // setInputState("");
  };

  const deleteGoalHandler = (goalKey) => {
    setGoalsState((prev) => prev.filter((v) => v.key !== goalKey));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        inputValue={inputState}
        onChangeText={setInputState}
        onAddGoal={addGoalHandler}
      />
      <GoalsList goals={goalsState} deleteGoalHandler={deleteGoalHandler} />
    </View>
  );
}
