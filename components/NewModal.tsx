import { useState } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function NewModal({ state }) {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Modal visible={state} transparent={true}>
      <View style={styles.centerView}>
        <View style={styles.container}>
          <TouchableOpacity onPress={pickImage}>
            <MaterialCommunityIcons
              name="image-edit-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <TextInput placeholder="Title" />
          <TextInput placeholder="Author" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: "50%",
    paddingHorizontal: "30%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 80,
  },
});
