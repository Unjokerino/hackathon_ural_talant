import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Image, Linking, RefreshControl } from "react-native";
import { Text, Title, Description, View } from "../../components/Themed";
import { styles } from "./styles";

export default function index() {
  const [articles, setArticles] = useState([]);
  const [refreshing, setrefreshing] = useState(false);
  const fetchData = async () => {
    setrefreshing(true);
    var url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=ru&" +
      "apiKey=2e6e63adfd824d0fb463e2e24bf4b065";
    var req = new Request(url);
    const response = await fetch(url);
    const json = await response.json();
    setArticles(json.articles);
    setrefreshing(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Title style={styles.title}>Лента</Title>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
          }
          showsVerticalScrollIndicator={false}
        >
          {articles.map((el) => {
            return (
              <TouchableOpacity
                onPress={() => Linking.openURL(el.url)}
                key={el.title}
                style={{ elevation: 3, marginBottom: 20 }}
              >
                <Image
                  resizeMode="contain"
                  style={{ height: 200 }}
                  source={{ uri: el.urlToImage }}
                />

                <Title>{el.title}</Title>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
