import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScrollButton({ status }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{status}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    borderRadius: 15,
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
  text: {
    color: "#fff",
  },
});
