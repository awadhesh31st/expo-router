import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CardWithIcon from "./cards/card-with-icon";
import { SkillList } from "../mock/skill-list";

const HorizontalList = () => {
  const skills = SkillList || [];
  return (
    <View style={styles.horizontalList}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={skills}
        renderItem={({ item }) => {
          return <CardWithIcon content={item.content} />;
        }}
      />
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  horizontalList: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginHorizontal: 24,
    marginBottom: 20,
    marginTop: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#c0eacb",
  }
});
