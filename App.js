import { StyleSheet, Text, View, Button, Switch } from "react-native";
import React from "react";

export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>
          Open up App.js to start working on your app!
        </Text>
      </View>
      <Text style={styles.dummyText}>Hello, World!!!!!</Text>
      <Button title="Tap" />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 3,
    borderColor: "blue",
    padding: 16,
  },
});
