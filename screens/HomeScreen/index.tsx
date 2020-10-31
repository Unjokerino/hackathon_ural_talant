import React, { useEffect, useState } from "react";
import { Text, Title, Description, View } from "../../components/Themed";
import { TextInput, Image, RefreshControl } from "react-native";
import { Button, IconButton, Badge } from "react-native-paper";
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import BannerCard from "../../components/BannerCard";
import EventCard from "../../components/EventCard";
import events_json from "../../constants/Events";
import Fuse from "fuse.js";
import AsyncStorage from "@react-native-community/async-storage";

export default function index({ navigation, route }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState(events_json);
  const [refreshing, setRefreshing] = useState(false);

  const fetchEvents = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const goTo = (screen: String, props = {}) => {
    navigation.navigate(screen, props);
  };
  const loadStorage = async () => {
    let categories = await AsyncStorage.getItem("categories");
    categories = JSON.parse(categories);
    let fd = new FormData();
    fd.append("сategories", JSON.stringify(categories));

    const body = {
      categories: categories,
    };

    try {
      const response = await fetch(
        "https://rest-api-hakaton.herokuapp.com/category/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(body),
        }
      );
      const json = await response.json();
      console.log(json);
      setEvents(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadStorage();
  }, []);
  useEffect(() => {
    if (searchQuery) {
      const options = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        keys: ["title", "category"],
      };

      const fuse = new Fuse(events_json, options);

      const result = fuse.search(searchQuery);

      setEvents(result.map((el) => el.item));
    } else {
      setEvents(events_json);
    }
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.title}>Лента</Title>
        <View>
          <Badge style={styles.badge} size={16} visible={true}>
            3
          </Badge>
          <IconButton
            onPress={() => goTo("Notifications")}
            size={26}
            icon="bell-outline"
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Поиск"
          selectionColor="black"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(searchQuery) => setSearchQuery(searchQuery)}
        />
        <IconButton style={styles.searchBtn} color="white" icon="magnify" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadStorage} />
        }
      >
        <BannerCard />
        <View style={styles.eventsContainer}>
          {events.map((event) => {
            const { _id, title, duration, date, type, category } = event;
            return (
              <EventCard
                _id={_id}
                key={_id}
                title={title}
                duration={duration}
                date={date}
                type={type}
                category={category}
                onPress={goTo}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
