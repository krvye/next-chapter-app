import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StatusText({ status }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderBottomWidth: 1,
    borderColor: "#fff",
    width: 70,
    marginVertical: "5%",
  },
  text: {
    color: "#fff",
    marginBottom: "5%",
  },
});
