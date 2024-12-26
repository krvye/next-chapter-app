import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ScrollUpButton({ status }) {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name="arrowup" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
  },
});
