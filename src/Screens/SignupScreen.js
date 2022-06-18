import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SignupForm from "../Components/SignupComponents/SignupForm";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Images/loginLogo.png")} />
      </View>
      <SignupForm navigation={navigation} />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "white",
    paddingTop: 50,
  },
  logoContainer: { alignItems: "center", marginTop: 60 },
});
