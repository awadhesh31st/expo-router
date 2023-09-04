import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import MainHeading from "../components/main-heading";
import Paragraph from "../components/paragraph";
import HorizontalList from "../components/horizontal-list";
import SubHeading from "../components/sub-heading";
import Poster from "../components/poster";
import PressLink from "../components/press-link";
import DividerSapce from "../components/divider-sapce";
import ViewProfile from "../components/cards/view-profile";
import { linkedin, portfolio } from "../constants/common";
import { HomeMock } from "../mock/home-mock";
import { OpenURL } from "../utils/can-link-open";

const App = () => {
  const { title, description } = HomeMock;
  return (
    <View style={styles.container}>
      <ScrollView>
        <DividerSapce marginTop={28} />
        <MainHeading content={title} horizontalAlignment="center" />
        <Paragraph content={description} horizontalAlignment="center" />
        <PressLink
          uri="/projects"
          content="Check - "
          subContent="some project"
          alignSelf="center"
        />
        <HorizontalList />
        <SubHeading content="Over the years" horizontalAlignment="center" />
        <Paragraph
          content="#2023 Awadhesh Kumar"
          horizontalAlignment="center"
        />
        <Pressable onPress={() => OpenURL(portfolio)}>
          <Poster />
        </Pressable>
        <ViewProfile
          name="Awadhesh"
          type="linkedin"
          uri={linkedin}
          view="View"
        />
        <DividerSapce marginTop={12} />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1ffde",
    color: "#0f0d0e",
  },
});
