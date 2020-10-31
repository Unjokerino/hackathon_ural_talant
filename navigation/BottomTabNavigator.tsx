import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailedEventScreen from "../screens/DetailedEventScreen";
import NewsScreen from "../screens/NewsScreen";
import DetailedNewsScreen from "../screens/DetailedNewsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import {
  BottomTabParamList,
  FavoritesParamList,
  HomeParamList,
  NewsParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Лента"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Лента"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Новости"
        component={NewsStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-paper" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Избранное"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-heart" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const NewsStack = createStackNavigator<NewsParamList>();

function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="Новости"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <NewsStack.Screen
        name="Detailed"
        component={DetailedNewsScreen}
        options={{ headerShown: false }}
      />
    </NewsStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Лента"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Detailed"
        component={DetailedEventScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const FavoritesStack = createStackNavigator<FavoritesParamList>();

function TabTwoNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerTitle: "Избранное" }}
      />
    </FavoritesStack.Navigator>
  );
}
