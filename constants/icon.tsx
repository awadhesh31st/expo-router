import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export const repoList: { [name: string]: React.ReactNode } = {
  "blog-firebase-app": <FontAwesome5 name="blog" size={20} color="black" />,
  "expo-router": <MaterialIcons name="router" size={20} color="black" />,
  "mobx-project": (
    <FontAwesome5 name="window-restore" size={20} color="black" />
  ),
  "next-13": <MaterialIcons name="next-week" size={20} color="black" />,
  "next-auth": (
    <MaterialIcons name="admin-panel-settings" size={20} color="black" />
  ),
  portfolio: <MaterialIcons name="web" size={20} color="black" />,
  storybook: <FontAwesome name="book" size={20} color="black" />,
  "webpack-saga": <MaterialIcons name="settings" size={20} color="black" />,
};
