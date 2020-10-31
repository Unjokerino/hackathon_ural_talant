import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  mainAD: {
    width: "100%",
    height: 202,
    flexDirection: "row",

    backgroundColor: "#D5F7E6",
  },
  informationAD: {
    justifyContent: "center",
    backgroundColor: "transparent",

    flex: 1,
  },
  buttonAD: {
    marginTop: 21,
    width: "80%",
    backgroundColor: "#FF853A",
  },
  imageAD: {
    height: "100%",
    flex: 1,
  },
  titleAD: {
    fontSize: 18,
  },
});
