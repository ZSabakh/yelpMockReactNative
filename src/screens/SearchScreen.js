import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Search from "../components/Search";

function SearchScreen() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <View>
      <Search
        search={search}
        onSearchChange={(newSearch) => {
          setSearch(newSearch);
        }}
        onSearchSubmit={() => console.log("Great success! Is niiice")}
      />
      <Text>Henlo</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
