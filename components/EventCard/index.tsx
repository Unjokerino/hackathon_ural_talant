import React from "react";
import { Text, Title, Description, View } from "../../components/Themed";
import styles from "./styles";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function index(props: {
  _id: String;
  title: any;
  duration: any;
  date: any;
  type: any;
  category: any;
  onPress: Function;
}) {
  const { _id, title, duration, date, type, category, onPress } = props;
  const types = {
    Встреча: {
      primary: "#5BB491",
      accent: "#f5faf5",
      icon: require("../../assets/images/type1.png"),
    },
    Экскурсия: {
      primary: "#ff853a",
      accent: "#fef6f4",
      icon: require("../../assets/images/type1.png"),
    },
    Олимпиада: {
      primary: "#4cb1ff",
      accent: "#f2f8fc",
      icon: require("../../assets/images/type2.png"),
    },
  };
  return (
    <TouchableOpacity
      onPress={() => onPress("Detailed", { title, type })}
      style={[
        styles.container,
        { backgroundColor: types[type] ? types[type].accent : "#f5faf5" },
      ]}
    >
      <View
        style={[
          styles.categoryIcon,
          { backgroundColor: types[type] ? types[type].primary : "#5BB491" },
        ]}
      >
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={
            types[type]
              ? types[type].icon
              : require("../../assets/images/type2.png")
          }
        />
      </View>
      <View style={styles.infoContainer}>
        <Title style={styles.title}>{title}</Title>
        <Description style={styles.description}>{duration}</Description>
      </View>
    </TouchableOpacity>
  );
}
