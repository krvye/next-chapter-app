import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NewButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>New</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: "5%",
    width: "20%",
    borderRadius: 15,
  },
  text: {
    color: "#fff",
  },
});
