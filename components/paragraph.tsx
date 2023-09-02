import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BasicProps } from "../types/common";

const Paragraph: React.FC<BasicProps> = ({ content }) => {
  return (
    <View style={styles.paragraph}>
      <Text style={styles.paragraphText}>{content}</Text>
    </View>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  paragraph: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
    marginBottom: 20,
  },
  paragraphText: {
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "center",
  },
});
