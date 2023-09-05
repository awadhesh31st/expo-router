import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { BasicProps } from "../types/common";

const PressLink: React.FC<BasicProps> = ({
  uri = "",
  content = "Press",
  subContent = "",
  alignSelf,
}) => {
  const router = useRouter();
  return (
    <Pressable style={styles.button} onPress={() => router.push(uri)}>
      <View style={{ ...styles.buttonWrapper, ...{ alignSelf: alignSelf } }}>
        {content && <Text style={styles.buttonText}>{content}</Text>}
        {subContent && <Text style={styles.buttonSubText}>{subContent}</Text>}
      </View>
    </Pressable>
  );
};

export default PressLink;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 28,
    marginBottom: 20,
  },
  buttonWrapper: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#0f0d0e",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#f9f4da",
    fontFamily: "font-Bold",
  },
  buttonSubText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#f9f4da",
    fontFamily: "font-Light",
  },
});
