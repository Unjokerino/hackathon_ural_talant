import React from "react";
import { Title, View } from "../../components/Themed";
import { Image } from "react-native";
import Colors from "../../constants/Colors";
import { Button } from "react-native-paper";
import { styles } from "./styles";

export default function index() {
  return (
    <View style={styles.mainAD}>
      <Image
        resizeMode="contain"
        style={styles.imageAD}
        source={require("../../assets/images/learning.png")}
      />
      <View style={styles.informationAD}>
        <Title style={styles.titleAD}>
          Чему бы ты хотел научиться сегодня?
        </Title>
        <Button onPress={() => {}} color="#fff" style={styles.buttonAD}>
          Начать
        </Button>
      </View>
    </View>
  );
}
