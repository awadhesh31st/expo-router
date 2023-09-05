import { MaterialCommunityIcons } from "@expo/vector-icons";
import { openURL } from "expo-linking";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ViewProfileProps } from "../../types/common";

const ViewProfile: React.FC<ViewProfileProps> = ({
  name,
  uri = "",
  type,
  view = "",
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.media}>
        {type === "github" && (
          <MaterialCommunityIcons name="github" size={24} color="black" />
        )}
        {type === "linkedin" && (
          <MaterialCommunityIcons name="linkedin" size={24} color="black" />
        )}
        <Text style={styles.userName}>{name}</Text>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.view}>
        <Pressable onPress={() => openURL(uri)}>
          <Text style={styles.viewLink}>{view}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ViewProfile;

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 28,
    paddingBottom: 24,
  },
  media: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 3,
    padding: 12,
  },
  userName: {
    fontSize: 16,
    fontFamily: "font-Black",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  viewLink: {
    textDecorationLine: "underline",
    fontFamily: "font-Light",
  },
});
