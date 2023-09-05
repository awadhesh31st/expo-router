import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BasicProps } from "../../types/common";

const CardWithIcon: React.FC<BasicProps> = ({ content }) => {
  return (
    <View style={styles.cardWithIcon}>
      {content === "react" && (
        <MaterialCommunityIcons name="react" size={20} color="black" />
      )}
      {content === "typescript" && (
        <MaterialCommunityIcons
          name="language-typescript"
          size={24}
          color="black"
        />
      )}
      {content === "javascript" && (
        <MaterialCommunityIcons
          name="language-javascript"
          size={24}
          color="black"
        />
      )}
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

export default CardWithIcon;

const styles = StyleSheet.create({
  cardWithIcon: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    marginHorizontal: 12,
  },
  icon: {
    fontSize: 36,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Playfair-Black",
  },
});
