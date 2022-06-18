import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/Images/MainLogo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("NewPostScreen")}>
          <Image
            style={styles.icons}
            source={require("../../assets/Images/plus.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require("../../assets/Images/heart.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icons}
            source={require("../../assets/Images/chat.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 140,
    height: 50,
    resizeMode: "contain",
  },
  icons: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    left: 25,
    bottom: 17,
    width: 20,
    height: 16,
    borderRadius: 20,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
