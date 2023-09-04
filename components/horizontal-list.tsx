import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SkillList } from "../mock/skill-list";
import CardWithIcon from "./cards/card-with-icon";

const HorizontalList = () => {
  const skills = SkillList || [];
  return (
    <View style={styles.horizontalList}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {skills.map((item, key) => {
          return <CardWithIcon content={item.content} key={key} />;
        })}
      </ScrollView>
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  horizontalList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginHorizontal: 24,
   marginVertical: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#c0eacb",
  },
});
