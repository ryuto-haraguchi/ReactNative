import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085aff",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#777676ff",
    color: "#fff",
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
  img: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
