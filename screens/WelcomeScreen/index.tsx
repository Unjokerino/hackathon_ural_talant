import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import { Text, Title, Description } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

export default function WelcomeScreen({ navigation }) {
  const goToCategories = () => {
    navigation.navigate("Categories");
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/images/welcome.png")}
      />
      <Title style={styles.title}>Выбор увлечений</Title>
      <Description style={styles.description}>
        Это поможет нам рекомендовать тебе только интересные и полезные курсы,
        мероприятия и многое другое
      </Description>

      <Button style={styles.btn} onPress={goToCategories} color="white">
        <Title style={styles.btnText}>Выбрать увлечения</Title>
      </Button>
    </View>
  );
}
