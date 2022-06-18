import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Users } from "../../data/Users";

const Stories = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Users.map((story, index) => (
          <View key={index} style={styles.storiesContainer}>
            <Image style={styles.image} source={{ uri: story.image }} />
            <Text>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + "..."
                : story.user.toLowerCase}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 90,
    marginRight: 7,
    borderWidth: 3,
    borderColor: "#FCAF45",
  },
  storiesContainer: {
    alignItems: "center",
  },
});
