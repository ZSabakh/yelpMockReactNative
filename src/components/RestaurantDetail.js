import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
function RestaurantDetail(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.detail.image_url }} />
      <Text style={styles.name}>{props.detail.name}</Text>
      <Text>
        {props.detail.rating}
        <AntDesign name="star" size={15} color="gold" />,{" "}
        {props.detail.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 2,
    marginBottom: 3,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default RestaurantDetail;
