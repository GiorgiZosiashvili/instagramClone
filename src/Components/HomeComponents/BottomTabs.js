import { Image, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";

export const bottomTabIcons = [
  {
    name: "Home",
    active: require("../../assets/Images/home-active.png"),
    inactive: require("../../assets/Images/home-inactive.png"),
  },
  {
    name: "Search",
    active: require("../../assets/Images/search-active.png"),
    inactive: require("../../assets/Images/search-inactive.png"),
  },
  {
    name: "Reels",
    active: require("../../assets/Images/reels-active.png"),
    inactive: require("../../assets/Images/reels-inactive.png"),
  },
  {
    name: "Shop",
    active: require("../../assets/Images/shop-active.png"),
    inactive: require("../../assets/Images/shop-inactive.png"),
  },
  {
    name: "Profile",
    active: require("../../assets/Images/profile-active.png"),
    inactive: require("../../assets/Images/profile-inactive.png"),
  },
];
const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const Icon = ({ icon }) => {
    return (
      <Pressable
        style={activeTab === icon.name}
        onPress={() => setActiveTab(icon.name)}
      >
        <Image
          style={[styles.bottomIcons]}
          source={activeTab === icon.name ? icon.active : icon.inactive}
        />
      </Pressable>
    );
  };
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  bottomIcons: {
    width: 28,
    height: 28,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    alignItems: "center",
  },
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "2.5%",
    zIndex: 5,
    backgroundColor: "white",
  },
  activeBackground: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: "#D4D4D4",
    alignItems: "center",
    justifyContent: "center",
  },
});
