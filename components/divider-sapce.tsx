import React from "react";
import { View } from "react-native";
import { SpaceAround } from "../types/common";

const DividerSapce: React.FC<SpaceAround> = ({
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  marginVertical,
  marginHorizontal
}) => {
  return (
    <View
      style={{
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginBottom: marginBottom,
        marginRight: marginRight,
        marginVertical: marginVertical,
        marginHorizontal: marginHorizontal,
      }}
    />
  );
};

export default DividerSapce;
