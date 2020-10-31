import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import NotificationScreen from "../screens/NotificationScreen";

import { RootStackParamList, WelcomeStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="WelcomeStack" component={WelcomeNavigator} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const WelcomeStack = createStackNavigator<WelcomeStackParamList>();

function WelcomeNavigator() {
  return (
    <WelcomeStack.Navigator screenOptions={{ headerShown: false }}>
      <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} />
      <WelcomeStack.Screen name="Categories" component={CategoriesScreen} />
    </WelcomeStack.Navigator>
  );
}
