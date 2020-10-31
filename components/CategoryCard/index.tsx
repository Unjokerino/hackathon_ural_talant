import React, { useEffect } from "react";
import { View, Image } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Text, Title, Description } from "../../components/Themed";
import { styles } from "./styles";
import DonatChart from "../DonatChart";
import { IconButton } from "react-native-paper";
import Colors from "../../constants/Colors";
export default function CategoryCard(props: {
  id: String;
  title: String;
  picture: any;
  description: String;
  events: Number;
  checked: Boolean;
  onPress: Function;
}) {
  const { id, title, picture, events, description, onPress, checked } = props;
  useEffect(() => {
    // console.log(props);
  }, []);
  return (
    <TouchableWithoutFeedback
      onPress={() => onPress(id)}
      style={[styles.container, checked && styles.checked]}
    >
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: picture }}
      />
      <Title>{title}</Title>
      <View style={styles.row}>
        <Description>{description}</Description>
        <DonatChart
          color={Colors.light.primary}
          radius={12}
          percentage={checked ? 100 : 0}
        >
          {checked && (
            <IconButton size={12} color={Colors.light.primary} icon="check" />
          )}
        </DonatChart>
      </View>
    </TouchableWithoutFeedback>
  );
}
