import React from "react";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { PLAYER2COLOR } from "../constants";

const Circle = () => {
  return <Entypo name="circle" size={100} color={PLAYER2COLOR} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default Circle;
