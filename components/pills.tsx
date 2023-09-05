import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BasicProps } from "../types/common";

const Pills: React.FC<BasicProps> = ({
  content,
  alignSelf,
  bgColor = "#d1ffde",
}) => {
  return (
    <View
      style={{
        ...styles.pills,
        ...{ alignSelf: alignSelf, backgroundColor: bgColor },
      }}
    >
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

export default Pills;

const styles = StyleSheet.create({
  pills: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginHorizontal: 28,
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    color: "#f9f4da",
    fontFamily: "font-Light",
  },
});
