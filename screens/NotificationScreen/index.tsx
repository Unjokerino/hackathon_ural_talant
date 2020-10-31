import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import { Text, Title, Description, View } from "../../components/Themed";
import { styles } from "./styles";
import events_json from "../../constants/Events";
import EventCard from "../../components/EventCard";

export default function index({ navigation }) {
  const [events, setEvents] = useState(events_json);
  const goTo = (screen: String, props = {}) => {
    navigation.navigate(screen, props);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          onPress={() => navigation.goBack()}
          size={32}
          icon="arrow-left"
        />
        <Title style={styles.title}>Уведомления</Title>
      </View>
      <View style={styles.eventsContainer}>
        {events.map((event) => {
          const { title, duration, date, type, category } = event;
          return (
            <EventCard
              key={title}
              title={title}
              duration={duration}
              date={date}
              type={type}
              category={category}
              onPress={() => goTo("Detailed")}
            />
          );
        })}
      </View>
    </View>
  );
}
