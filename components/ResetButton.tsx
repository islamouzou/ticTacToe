import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  onClick: () => void;
};
const ResetButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onClick()} style={styles.container}>
      <Text>New Game</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 60,
    fontSize: 15,
  },
});

export default ResetButton;
