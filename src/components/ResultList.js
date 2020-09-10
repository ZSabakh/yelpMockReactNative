import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RestaurantDetail from "./RestaurantDetail";

function ResultList(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <RestaurantDetail detail={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultList;
