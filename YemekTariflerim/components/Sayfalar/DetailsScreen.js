import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import DetailsScreenList from './DetailsScreenList';

const DetailsScreen = () => {
  useEffect(() => {
    GetDataAl();
  }, []);
  const [datatarifleri, Setdatatarifleri] = useState([]);

  async function GetDataAl() {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/search.php?f=c',
    );

    Setdatatarifleri(response.data.meals);
  }

  const navigation = useNavigation();
  const route = useRoute();
  const renderitemmm = ({item}) => (
    <DetailsScreenList
      strMeal={item.strMeal}
      strMealThumb={item.strMealThumb}
      strCategory={item.strCategory}
      strCategoryb={route.params.strCategory}
      idMeal={item.idMeal}
      
    />
  );
  return (
    <SafeAreaView>
      <Text style={styles.tarifbaslik}>{route.params.strCategory} </Text>
      <FlatList data={datatarifleri} renderItem={renderitemmm} />
    </SafeAreaView>
  );
};
export default DetailsScreen;
const styles = StyleSheet.create({
  asd: {color: 'red', fontSize: 50, flex: 1},
  tarifbaslik: {fontSize: 25, marginStart: '50%', fontWeight: 'bold'},
});
