import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
    <View style={{ flex: 1 }}>
      <Search
        search={search}
        onSearchChange={(newSearch) => {
          setSearch(newSearch);
        }}
        onSearchSubmit={() => initSearch(search)}
      />
      {results[0] ? <Text>City: {results[0].location.city}</Text> : null}
      {errorNotif ? <Text>{errorNotif}</Text> : null}
      <Text>
        Found {results.length === 50 ? `${results.length}+` : results.length}{" "}
        results
      </Text>
      <ScrollView>
        <ResultList results={priceFilter("$")} title="Cheap" />
        <ResultList results={priceFilter("$$")} title="Moderate" />
        {priceFilter("$$$").length > 0 ? (
          <ResultList results={priceFilter("$$$")} title="High Roller" />
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
