import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

function ResultList(props) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        horizontal={true}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ResultList;
