import { ScrollView, StyleSheet, View } from "react-native";
import MainHeading from "../components/main-heading";
import Paragraph from "../components/paragraph";
import HorizontalList from "../components/horizontal-list";
import SubHeading from "../components/sub-heading";
import Poster from "../components/poster";
import PressLink from "../components/press-link";
import DividerSapce from "../components/divider-sapce";
import ViewProfile from "../components/cards/view-profile";
import { linkedin } from "../constants/common";

const App = () => {
  return (
    <View style={styles.container}>
      <DividerSapce marginTop={28} />
      <MainHeading
        content="Creating intuitive and User-friendly Web interfaces"
        horizontalAlignment="center"
      />
      <Paragraph
        content="I have created courses on React, Next.js, and web development to share my knowledge with others."
        horizontalAlignment="center"
      />
      <PressLink
        uri="/projects"
        content="Get Touch - "
        subContent="with project"
        alignSelf="center"
      />
      <HorizontalList />
      <ScrollView>
        <SubHeading content="Over the years" horizontalAlignment="center" />
        <Paragraph
          content="#2023 Awadhesh Kumar"
          horizontalAlignment="center"
        />
        <Poster />
        <ViewProfile
          name="Awadhesh"
          type="linkedin"
          uri={linkedin}
          view="See"
        />
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
