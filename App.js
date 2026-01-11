import { View, Button } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";
import styles from "./styles/appStyles";

export default function App() {
  const [inputState, setInputState] = useState("");
  const [goalsState, setGoalsState] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = () => {
    setGoalsState((prev) => [
      ...prev,
      { value: inputState, key: Math.random().toString() },
    ]);
    setInputState("");
    setIsModalVisible(false);
  };

  const showModalHandler = () => {
    setIsModalVisible(true);
  };

  const hideModalHandler = () => {
    setIsModalVisible(false);
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
        onCancel={hideModalHandler}
        visible={isModalVisible}
      />
      <GoalsList goals={goalsState} deleteGoalHandler={deleteGoalHandler} />
      <Button title="Add Goal" color="#5e0acc" onPress={showModalHandler} />
    </View>
  );
}
