import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViweProfile = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.media}>
        <MaterialCommunityIcons name="github" size={24} color="black" />
        <Text style={styles.userName}>Awadhesh</Text>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.view}>
        <Text style={styles.viewLink}>View all</Text>
      </View>
    </View>
  );
};

export default ViweProfile;

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
    fontWeight: "800"
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  viewLink: {
    textDecorationLine: "underline"
  }
});
