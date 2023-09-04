import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { GitRepoProps } from "../../types/common";
import { repoList } from "../../constants/icon";

const CardWithSpaceBetween: React.FC<GitRepoProps> = ({ id, name }) => {
  const router = useRouter();
  return (
    <View style={styles.cardWapper}>
      <View style={styles.cardBody}>
        <View style={styles.cardLeft}>
          {repoList[`${name}`]}
          <Text style={styles.title}>{name}</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/projects")}>
          <MaterialIcons name="link" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardWithSpaceBetween;

const styles = StyleSheet.create({
  cardWapper: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "# ",
  },
  cardBody: {
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardLeft: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: "capitalize",
  },
});
