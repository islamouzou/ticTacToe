import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  BLANKBOARD,
  BLANKCELL,
  DRAW,
  O,
  PLAYER1,
  PLAYER1COLOR,
  PLAYER2,
  PLAYER2COLOR,
  X,
} from "../constants";
import { checkWin } from "../helpers/checkWin";
import { RootState } from "../store";
import Board from "./Board";
import ResetButton from "./ResetButton";
import { changePlayer, reset, setWinner } from "./store/actions/board";

const MainGame = () => {
  const { board, currentPlayer, winner } = useSelector(
    (state: RootState) => state.board
  );

  const dispatch = useDispatch();

  const resetGame = () => {
    dispatch(reset());
  };

  useEffect(() => {
    if (board !== BLANKBOARD) checkWinner();
  }, [board]);

  const checkWinner = () => {
    if (!board.some((cell) => cell === BLANKCELL)) {
      dispatch(setWinner(DRAW));
    }

    let theWinner = checkWin(board);

    if (theWinner === X) dispatch(setWinner(PLAYER1));
    if (theWinner === O) dispatch(setWinner(PLAYER2));

    nextPlayer();
  };

  const nextPlayer = () => {
    if (currentPlayer === PLAYER1) dispatch(changePlayer(PLAYER2));
    if (currentPlayer === PLAYER2) dispatch(changePlayer(PLAYER1));
  };

  return (
    <View style={styles.container}>
      {winner ? (
        <Text style={styles.winnerText}>
          {winner !== DRAW ? winner + " Has Won the game" : DRAW}
        </Text>
      ) : (
        <Text
          style={{
            ...styles.playerText,
            color: currentPlayer === PLAYER1 ? PLAYER1COLOR : PLAYER2COLOR,
          }}
        >
          {currentPlayer}
        </Text>
      )}

      <Board data={board} />
      <ResetButton onClick={resetGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  playerText: {
    fontSize: 25,
    marginBottom: 20,
  },

  winnerText: {
    fontSize: 20,
    marginBottom: 20,
    color: "green",
  },
});

export default MainGame;
