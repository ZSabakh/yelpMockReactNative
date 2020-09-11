import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import yelp from "../api/yelp";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

function DetailScreen(props) {
  const [result, setResult] = useState();
  const id = props.route.params.id;

  async function getResult(id) {
    try {
      const response = await yelp.get(`/businesses/${id}`);
      setResult(response.data);
      console.log(result.photos);
    } catch (err) {
      console.log("ERROR:", err);
    }
  }

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{result.name}</Text>
      <View style={styles.container1}>
        <FlatList
          data={result.photos}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    justifyContent: "flex-start",
    fontSize: 20,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 300,
    margin: 30,
  },
});

export default DetailScreen;
