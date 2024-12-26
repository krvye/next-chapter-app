import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ScrollButton from "./components/ScrollButton";
import NewButton from "./components/NewButton";
import StatusText from "./components/StatusText";
import BookDetails from "./components/BookDetails";
import CounterNumber from "./components/CounterNumber";
import ScrollUpButton from "./components/ScrollUpButton";
import NewModal from "./components/NewModal";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.scrollButtons}>
        <ScrollButton status={"Next"} />
        <ScrollButton status={"Completed"} />
      </View>
      <CounterNumber number={10} />
      <NewButton />
      <NewModal />
      <View style={styles.bookContainer}>
        <StatusText status={"Ongoing"} />
        <BookDetails
          bookImageURL={
            "https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_15.png"
          }
          bookTitle={"Rich Dad Poor Dad"}
          bookAuthor={"Robert Kiyosaki"}
        />
        <StatusText status={"Next"} />
        <BookDetails />
        <StatusText status={"Completed"} />
        <BookDetails />
      </View>
      <ScrollUpButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
  subContainer: {
    flex: 1,
    marginVertical: "10%",
    marginHorizontal: "5%",
  },
  scrollButtons: {
    flexDirection: "row",
    marginVertical: "10%",
    justifyContent: "center",
    gap: 100,
  },
  bookContainer: {
    paddingHorizontal: "5%",
  },
});
