import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  image: {
    alignSelf: "center",
    width: width * 0.8,
  },
  title: {
    fontSize: 32,
    alignSelf: "center",
  },
  description: {
    marginTop: 34,
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
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
  },
});
