import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Square from "./Square";

type Props = {
  data: string[];
};

const Board: React.FC<Props> = ({ data }) => {
  const renderItem = ({ index }: { index: number }) => <Square index={index} />;

  return (
    <View style={styles.container}>
      <FlatList data={data} numColumns={3} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 350,
  },
});

export default Board;
