import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginForm from "../Components/LoginComponents/LoginForm";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Images/loginLogo.png")} />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: { alignItems: "center", marginTop: 60 },
});
