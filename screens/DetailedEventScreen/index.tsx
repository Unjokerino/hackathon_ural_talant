import React from "react";
import { View, Text, Title } from "../../components/Themed";
import styles from "./styles";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import { Button, IconButton } from "react-native-paper";

export default function index(props) {
  const { navigation, route } = props;
  const event = route.params;
  const tabs = [
    {
      title: "Описание",
      content: (
        <View>
          <Text>Нет описания</Text>
        </View>
      ),
    },

    {
      title: "Участвовать",
      content: (
        <View style={{ flex: 1 }}>
          <Button>Участвовать</Button>
        </View>
      ),
    },
    {
      title: "Участники",
      content: (
        <View>
          <Text>Пока нет участников</Text>
        </View>
      ),
    },
  ];

  const renderLogoHeader = () => {
    return (
      <View style={{ backgroundColor: Colors.light.primary }}>
        <Title>123</Title>
      </View>
    );
  };

  return (
    <StickyParallaxHeader
      backgroundColor={Colors.light.primary}
      title={event.title}
      header={renderLogoHeader}
      tabs={tabs}
      foregroundImage={
        event.type === 1
          ? require("../../assets/images/type1.png")
          : require("../../assets/images/type2.png")
      }
      leftTopIconOnPress={() => navigation.goBack()}
      leftTopIcon={require("../../assets/images/left-arrow.png")}
      headerType="TabbedHeader"
    />
  );
}
