import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    backgroundColor: "#7B25F0",
    width: Dimensions.get("window").width - 40,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 12,
    margin: 12,
    flexDirection: "row",
  },
  textBox: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  textName: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    color: "#FFF",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7B25F0",
    marginTop: Dimensions.get("window").height / 2 - 60,

  },
  closeModalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width / 4,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 15,
    backgroundColor: "#C2C2C2",
  },
});

export default styles;
