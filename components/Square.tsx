import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { O, PLAYER1, X } from "../constants";
import { RootState } from "../store";
import Circle from "./Circle";
import Cross from "./Cross";
import { editBoard } from "./store/actions/board";
type Props = {
  index: number;
};
const Square: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const { board, currentPlayer, winner } = useSelector(
    (state: RootState) => state.board
  );

  const { index } = props;

  const isDisabled = !!board[index] || winner;

  const setValue = () =>
    currentPlayer === PLAYER1
      ? dispatch(editBoard(X, index))
      : dispatch(editBoard(O, index));

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={setValue}
      style={styles.container}
    >
      {board[index] == "x" && <Cross />}
      {board[index] == "o" && <Circle />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350 / 3,
    aspectRatio: 1,
    backgroundColor: "#ebebeb",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Square;
