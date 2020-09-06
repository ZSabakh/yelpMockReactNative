import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Search(props) {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.icon} name="search1" size={33} color="black" />
      <TextInput
        value={props.search}
        onChangeText={(newSearch) => props.onSearchChange(newSearch)}
        style={styles.input}
        placeholder="Search"
        onEndEditing={() => props.onSearchSubmit()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row",
  },
  icon: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 19,
  },
});

export default Search;
