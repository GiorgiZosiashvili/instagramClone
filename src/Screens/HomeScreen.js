import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Post from "../Components/Post";
import { Posts } from "../data/Posts";
import Header from "../Components/HomeComponents/Header";
import Stories from "../Components/HomeComponents/Stories";
import BottomTabs from "../Components/HomeComponents/BottomTabs";
import { bottomTabIcons } from "../Components/HomeComponents/BottomTabs";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {Posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
