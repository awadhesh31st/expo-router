import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BasicProps } from "../types/common";

const Paragraph: React.FC<BasicProps> = ({ content, horizontalAlignment }) => {
  return (
    <View style={styles.paragraph}>
      <Text
        style={{
          ...styles.paragraphText,
          ...{ textAlign: horizontalAlignment },
        }}
      >
        {content}
      </Text>
    </View>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  paragraph: {
    paddingHorizontal: 28,
    marginBottom: 20,
  },
  paragraphText: {
    fontSize: 16,
    fontWeight: "normal",
  },
});
