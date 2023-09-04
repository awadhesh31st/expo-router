import { Linking, Alert } from "react-native";

export const OpenURL = async (uri: string = "") => {
  if (uri) {
    const supported = await Linking.canOpenURL(uri);
    if (supported) {
      await Linking.openURL(uri);
    } else {
      Alert.alert(`Don't know how to open this URL: ${uri}`);
    }
  } else {
    Alert.alert(`Opps, URL not found`);
  }
};
