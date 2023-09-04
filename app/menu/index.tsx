import React from "react";
import { Stack, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MenuMock } from "../../mock/menu-mock";

const ModalMenu = () => {
  const router = useRouter();
  const { data } = MenuMock;
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#1d1d1d",
          },
          headerRight: undefined,
          headerLeft: undefined,
          headerBackVisible: false,
        }}
      />
      <StatusBar style="light" />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>MENU</Text>
      </View>
      <View style={styles.menuWrapper}>
        {data.map((item, key) => {
          return (
            <View key={key}>
              <Pressable onPress={() => router.push(item.link)}>
                <Text style={styles.menu}>{item.title}</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
      <View>
        <Text style={styles.qoute}>
          Welcome to a world of boundless innovation and creativity. Explore our
          menu of features, where your aspirations meet limitless possibilities.
          Your journey begins now, with every tap igniting inspiration
        </Text>
      </View>
    </View>
  );
};

export default ModalMenu;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d1d",
    paddingHorizontal: 28,
    justifyContent: "space-evenly",
  },
  titleWrapper: {
    marginTop: 12,
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderColor: "#4f4f4f",
  },
  title: {
    fontSize: 70,
    color: "#f9f4da",
    fontWeight: "bold",
  },
  menuWrapper: {
    paddingTop: 30,
  },
  menu: {
    fontSize: 50,
    color: "#f9f4da",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  qoute: {
    fontSize: 20,
    color: "#4f4f4f",
    fontWeight: "normal",
  },
});
