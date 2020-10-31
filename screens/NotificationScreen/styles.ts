import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  title: {
    marginLeft: 20,
    fontSize: 26,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    marginTop: 34,
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#646464",
  },
});
