import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BookDetails({ bookImageURL, bookTitle, bookAuthor }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: bookImageURL }} />
      <View>
        <Text style={styles.text}>{bookTitle}</Text>
        <Text style={styles.text}>{bookAuthor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    marginLeft: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  image: {
    height: 100,
    width: 80,
  },
});
