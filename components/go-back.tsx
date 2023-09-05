import React from "react";
import { useRouter } from "expo-router";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BasicProps } from "../types/common";

const GoBack: React.FC<BasicProps> = ({ content, uri = "" }) => {
  const router = useRouter();
  return (
    <Pressable style={styles.paragraph} onPress={() => router.back()}>
      <View style={styles.paragraphWapper}>
        <MaterialIcons name="keyboard-backspace" size={16} color="black" />
        <Text style={styles.paragraphText}>{content}</Text>
      </View>
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  paragraph: {
    paddingHorizontal: 28,
    marginTop: 20,
  },
  paragraphWapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  paragraphText: {
    fontSize: 12,
    fontFamily: "Playfair-Regular",
  },
});
