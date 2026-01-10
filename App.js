import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

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

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={inputState}
          onChangeText={setInputState}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>List of Goals</Text>
        <FlatList
          data={goalsState}
          renderItem={(itemData) => {
            return (
              <View>
                <Text style={styles.goalItem}>{itemData.item.value}</Text>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 16,
    marginBottom: 16,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#777676ff",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalsTitle: {
    fontSize: 24,
    marginBottom: 16,
  },
  goalItem: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    color: "white",
    borderRadius: 10,
  },
});
