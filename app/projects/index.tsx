import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import MainHeading from "../../components/main-heading";
import Paragraph from "../../components/paragraph";
import PressLink from "../../components/press-link";
import Pills from "../../components/pills";
import { GitRepoProps } from "../../types/common";
import DataList from "../../components/data-list";
import GoBack from "../../components/go-back";
import DividerSapce from "../../components/divider-sapce";
import ViewProfile from "../../components/cards/view-profile";
import { github } from "../../constants/common";
import { StatusBar } from "expo-status-bar";

const Project = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [_isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<GitRepoProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(
          "https://api.github.com/users/awadhesh31st/repos"
        );
        const res = await resp.json();
        setData(res);
        setIsError(false);
        setIsLoading(false);
      } catch (_error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.project}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#f9f4da",
          },
          title: "",
        }}
      />
      <StatusBar style="dark" />
      <GoBack content="Go Back" uri="/" />
      <DividerSapce marginTop={28} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Pills content="Project" alignSelf="flex-start" bgColor="#0f0d0e" />
        <MainHeading content="Created some User-friendly Web interfaces" />
        <Paragraph content="Some of the projects are from work and some are on my own time." />
        <PressLink
          content="Check - "
          uri="/about"
          alignSelf="flex-start"
          subContent="about me"
        />
        <DataList apiData={data} isLoading={isLoading} />
        <ViewProfile
          name="Awadhesh"
          type="github"
          uri={github}
          view="View all"
        />
      </ScrollView>
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({
  project: {
    flex: 1,
    backgroundColor: "#f9f4da",
  },
});
