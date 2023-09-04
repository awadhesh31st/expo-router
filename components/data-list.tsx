import React from "react";
import { ShareAPIDataProps } from "../types/common";
import {
  ActivityIndicator,
  StyleSheet,
  Pressable,
  View,
  Text,
} from "react-native";
import { colorList } from "../constants/color";
import { OpenURL } from "../utils/can-link-open";

const DataList: React.FC<ShareAPIDataProps> = ({
  apiData,
  isLoading = false,
}) => {
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.wapper}>
      {apiData?.slice(0, 4)?.map((item, key) => {
        return (
          <Pressable
            key={key}
            style={[styles.card, { backgroundColor: colorList[key] }]}
            onPress={() => OpenURL(item.html_url)}
          >
            <View style={styles.cardBody}>
              <Text style={styles.fullName}>{item.full_name}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default DataList;

export const styles = StyleSheet.create({
  wapper: {
    paddingHorizontal: 28,
    marginBottom: 20,
  },
  card: {
    padding: 24,
    marginTop: 16,
    borderRadius: 24,
  },
  cardBody: {
    gap: 12,
  },
  fullName: {
    color: "#3d3d4e",
    fontSize: 13,
    fontWeight: "500",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 16,
    fontWeight: "normal",
  },
});
