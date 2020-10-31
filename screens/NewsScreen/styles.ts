import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchContainer: {
    marginVertical: 17,
    backgroundColor: "white",
    elevation: 3,
    height: 57,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
  },
  eventsContainer: {
    marginTop: 30,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#fff",
    paddingHorizontal: 10,
  },
  searchBtn: {
    marginRight: 10,
    borderRadius: 6,
    width: 34,
    height: 34,
    backgroundColor: Colors.light.primary,
  },
  description: {
    marginTop: 34,
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#646464",
  },
  scrollView: {
    marginTop: 20,
  },
});
