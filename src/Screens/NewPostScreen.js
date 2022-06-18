import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import AddNewPost from "../Components/NewPost/AddNewPost";

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
