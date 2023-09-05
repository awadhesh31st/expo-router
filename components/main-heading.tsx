import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BasicProps } from "../types/common";

const MainHeading: React.FC<BasicProps> = ({
  content,
  horizontalAlignment,
}) => {
  return (
    <View style={styles.heading}>
      <Text
        style={{ ...styles.headingText, ...{ textAlign: horizontalAlignment } }}
      >
        {content}
      </Text>
    </View>
  );
};

export default MainHeading;

const styles = StyleSheet.create({
  heading: {
    paddingHorizontal: 28,
    marginBottom: 20,
  },
  headingText: {
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Playfair-Black",
  },
});
