import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Search from "../components/Search";
import useSearch from "../hooks/useSearch";
import ResultList from "../components/ResultList";

function SearchScreen() {
  const [search, setSearch] = useState("");
  const [initSearch, results, errorNotif] = useSearch();

  function priceFilter(price) {
    return results.filter((result) => {
      return result.price === price;
    });
  }

  return (
    <View>
      <Search
        search={search}
        onSearchChange={(newSearch) => {
          setSearch(newSearch);
        }}
        onSearchSubmit={() => initSearch(search)}
      />
      <Text>City: {results[0].location.city}</Text>
      {errorNotif ? <Text>{errorNotif}</Text> : null}
      <Text>
        Found {results.length === 50 ? `${results.length}+` : results.length}{" "}
        results
      </Text>
      <ResultList results={priceFilter("$")} title="Cheap" />
      <ResultList results={priceFilter("$$")} title="Moderate" />
      <ResultList results={priceFilter("$$$")} title="High Roller" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
