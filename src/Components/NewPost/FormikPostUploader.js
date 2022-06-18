import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements/dist/divider/Divider";
import validUrl from "valid-url";
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("An URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit"),
});
const PlaceHolder_Img =
  "https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-square.jpg";

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PlaceHolder_Img);
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log("your post was sybmitted sucsessfully");
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PlaceHolder_Img,
              }}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <TextInput
                style={{ fontSize: 18 }}
                multiline={true}
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                onChange={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            style={{ fontSize: 15 }}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    margin: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
