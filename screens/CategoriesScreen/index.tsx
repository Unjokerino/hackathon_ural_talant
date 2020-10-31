import React, { useState, useEffect } from "react";
import { View, Image, RefreshControl } from "react-native";
import { styles } from "./styles";
import { Text, Title, Description } from "../../components/Themed";
import categories_json from "../../constants/Categories";
import { ScrollView } from "react-native-gesture-handler";
import CategoryCard from "../../components/CategoryCard";
import { Button } from "react-native-paper";
import Colors from "../../constants/Colors";
import AsyncStorage from "@react-native-community/async-storage";

export default function CategoriesScreen({ navigation }) {
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selected, setselected] = useState([]);
  const [refreshing, setrefreshing] = useState(false);

  const toggleCategory = async (id: String) => {
    const temp = [...categories];
    const tselected = [...selected];
    temp.forEach((el) => {
      if (el._id === id) {
        el.checked = !el.checked;
        tselected.push(id);
      }
    });
    setselected(tselected);
    await AsyncStorage.setItem("categories", JSON.stringify(selected));
    setCategories(temp);
  };

  const fetchCategories = async () => {
    setrefreshing(true);
    const url = "https://rest-api-hakaton.herokuapp.com/category";
    const response = await fetch(url);
    const json = await response.json();
    setCategories(json);
    setrefreshing(false);
  };

  useEffect(() => {
    categories.forEach((category) => {
      if (category.checked) {
        setShowNextBtn(true);
      }
    });
  }, [categories]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const goToApp = () => {
    navigation.replace("Root", { categories: selected });
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Категории</Title>
      <Description style={styles.description}>
        Найди самую подходяющую для себя
      </Description>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchCategories} />
        }
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.row}>
          <View style={styles.column}>
            {categories.map((category, index) => {
              const {
                _id,
                description,
                title,
                picture,
                events,
                checked,
              } = category;
              if (index % 2 === 0) {
                return (
                  <CategoryCard
                    id={_id}
                    key={title}
                    picture={picture}
                    title={title}
                    events={events}
                    checked={checked}
                    onPress={toggleCategory}
                  />
                );
              }
            })}
          </View>
          <View style={[styles.column, { marginTop: 40 }]}>
            {categories.map((category, index) => {
              const {
                _id,
                description,
                title,
                cover,
                picture,
                events,
                checked,
              } = category;
              if (index % 2 !== 0) {
                return (
                  <CategoryCard
                    id={_id}
                    key={title}
                    picture={picture}
                    title={title}
                    events={events}
                    checked={checked}
                    onPress={toggleCategory}
                  />
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
      {showNextBtn && (
        <Button
          onPress={goToApp}
          style={{ backgroundColor: Colors.light.primary, marginBottom: 20 }}
          color="#fff"
        >
          Далее
        </Button>
      )}
    </View>
  );
}
