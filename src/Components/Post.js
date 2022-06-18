import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
const Post = ({ post }) => {
  return (
    <View style={styles.postContainer}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 5 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSections post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles.profile_picture}
        source={{ uri: post.profile_picture }}
      />
      <Text style={{ marginLeft: 5, fontWeight: "700" }}>{post.user}</Text>
    </View>
    <Text style={{ fontWeight: "900", marginRight: 5 }}>...</Text>
  </View>
);
const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 400 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);
const PostFooter = () => (
  <View style={styles.footerContainer}>
    <View style={{ flexDirection: "row" }}>
      <Icon imageUrl={postFooterIcons[0].imageUrl} />
      <Icon imageUrl={postFooterIcons[1].imageUrl} />
      <Icon imageUrl={postFooterIcons[2].imageUrl} />
    </View>
    <Icon imageUrl={postFooterIcons[3].imageUrl} />
  </View>
);
const Icon = ({ imageUrl }) => (
  <TouchableOpacity>
    <Image style={styles.footerIcon} source={imageUrl} />
  </TouchableOpacity>
);
const Likes = ({ post }) => (
  <View style={{ marginVertical: 2 }}>
    <Text style={styles.likeText}>{post.likes} likes</Text>
  </View>
);
const Caption = ({ post }) => (
  <Text>
    <Text style={styles.userText}>{post.user} </Text>
    <Text style={styles.captionText}>{post.caption}</Text>
  </Text>
);
const CommentSections = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={styles.commentsText}>
        View {post.comments.length > 1 ? "all " : ""}
        {""}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);
const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={styles.commentsContainer}>
        <Text>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text> {""}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);
const postFooterIcons = [
  {
    name: "Like",
    imageUrl: require("../assets/Images/heart.png"),
    likedImageUrl: require("../assets/Images/redHeart.png"),
  },
  {
    name: "Comment",
    imageUrl: require("../assets/Images/chat.png"),
  },
  {
    name: "Share",
    imageUrl: require("../assets/Images/send.png"),
  },
  {
    name: "Save",
    imageUrl: require("../assets/Images/save.png"),
  },
];

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: 10,
    flex: 1,
  },
  profile_picture: {
    width: 35,
    height: 35,
    borderRadius: 90,
    marginRight: 1,
    borderWidth: 1.5,
    borderColor: "#FCAF45",
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  likeText: {
    fontWeight: "400",
  },
  captionText: {
    fontWeight: "400",
  },
  userText: {
    fontWeight: "700",
  },
  commentsText: {
    color: "gray",
  },
  commentsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
});
