import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CounterNumber({ number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 50,
  },
  text: {
    color: "#fff",
    fontSize: 50,
  },
});
