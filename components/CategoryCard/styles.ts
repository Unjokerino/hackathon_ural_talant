import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    width: width * 0.38,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "white",
    marginBottom: 40,
    padding: 10,
    transform: [{ scale: 1 }],
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    width: width * 0.35,
    height: width * 0.35,
  },
  checked: {},
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 14,
    color: "#646464",
  },
  btn: {
    width: width * 0.8,
    height: 76,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 29,
    backgroundColor: Colors.light.primary,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
});
