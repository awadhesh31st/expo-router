import { StyleSheet, View } from "react-native";
import MainHeading from "../components/main-heading";
import Paragraph from "../components/paragraph";
import PressButton from "../components/press-button";
import HorizontalList from "../components/horizontal-list";
import SubHeading from "../components/sub-heading";
import Poster from "../components/poster";

const App = () => {
  return (
    <View style={styles.container}>
      <MainHeading content="Creating intuitive and User-friendly Web interfaces" />
      <Paragraph content="I have created courses on React, Next.js, and web development to share my knowledge with others." />
      <PressButton content="Get Touch - " subContent="with use" />
      <HorizontalList />
      <SubHeading content="Over the years" />
      <Paragraph content="#2023 Awadhesh Kumar" />
      <Poster />
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
