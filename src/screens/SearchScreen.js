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

      {errorNotif ? <Text>{errorNotif}</Text> : null}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {results[0] ? <Text>City: {results[0].location.city}</Text> : null}
        <Text>
          Found {results.length === 50 ? `${results.length}+` : results.length}{" "}
          results
        </Text>
      </View>
      <ScrollView>
        <ResultList
          // navigation={props.navigation}
          results={priceFilter("$")}
          title="Cheap"
        />
        <ResultList
          // navigation={props.navigation}
          results={priceFilter("$$")}
          title="Moderate"
        />
        {priceFilter("$$$").length > 0 ? (
          <ResultList
            // navigation={props.navigation}
            results={priceFilter("$$$")}
            title="High Roller"
          />
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
