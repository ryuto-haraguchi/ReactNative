import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#777676ff",
    width: "100%",
    padding: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 16,
  },
  buttonStyle: {
    flex: 0.3,
    marginHorizontal: 6,
  },
});
