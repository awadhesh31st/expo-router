import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BasicProps } from "../types/common";

const SubHeading: React.FC<BasicProps> = ({ content, horizontalAlignment }) => {
  return (
    <View style={styles.heading}>
      <Text
        style={{
          ...styles.headingText,
          ...{ textAlign: horizontalAlignment },
        }}
      >
        {content}
      </Text>
    </View>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  heading: {
    paddingHorizontal: 28,
    paddingTop: 28,
    marginBottom: 6,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "700",
  },
});
