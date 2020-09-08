import { useEffect, useState } from "react";
import { Alert } from "react-native";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorNotif, setErrorNotif] = useState("");

  const initSearch = async (searchQuery) => {
    try {
      const response = await yelp.get("/businesses/search", {
        params: {
          limit: 50,
          term: searchQuery,
          location: "russellville",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log("ERROR:", err);
      setErrorNotif(`Sum Ting Wong`);
      Alert.alert("Ho Lee Fuk", err.toString());
    }
  };

  useEffect(() => {
    initSearch("");
  }, []);

  return [initSearch, results, errorNotif];
};
