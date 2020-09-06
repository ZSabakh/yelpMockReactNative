import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Search from "../components/Search";
import yelp from "../api/yelp";

function SearchScreen() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [errorNotif, setErrorNotif] = useState("");

  const initSearch = async () => {
    try {
      const response = await yelp.get("/businesses/search", {
        params: {
          limit: 50,
          term: search,
          location: "new york city",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log("ERROR:", err);
      setErrorNotif(`Sum Ting Wong`);
      Alert.alert("Ho Lee Fuk", err.toString());
    }
  };

  return (
    <View>
      <Search
        search={search}
        onSearchChange={(newSearch) => {
          setSearch(newSearch);
        }}
        onSearchSubmit={() => initSearch()}
      />
      <Text>Henlo</Text>
      {errorNotif ? <Text>{errorNotif}</Text> : null}
      <Text>
        Found {results.length === 50 ? `${results.length}+` : results.length}{" "}
        results
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
