import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: 66,
    marginVertical: 6,
    borderRadius: 6,
    flexDirection: "row",
  },
  categoryIcon: {
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 6,
  },
  icon: {
    width: "90%",
    height: "90%",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 14,
  },
  description: {
    fontSize: 11,
  },
});

export default styles;
