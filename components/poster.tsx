import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Poster = () => {
  return (
    <View style={styles.poster}>
      <Image style={styles.image} source={require("../assets/poster.png")} />
    </View>
  );
};

export default Poster;

const styles = StyleSheet.create({
  poster: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
});
