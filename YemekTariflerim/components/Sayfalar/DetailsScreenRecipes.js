import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/native';
import DetailsScreenRecipesList from './DetailsScreenRecipesList';

const DetailsScreenRecipes = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [dataTarifDetay, SetDataTarifDetay] = useState([]);

  //console.log(route.params.idMeal);

  async function GetDataDetay() {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52776',
    );
    //console.log(response.data.categories);
    SetDataTarifDetay(response.data.meals);
  }
  console.log(dataTarifDetay);
  useEffect(() => {
    GetDataDetay();
  }, []);
  const renderitemlist = ({item}) => (
    <DetailsScreenRecipesList
      strMeal={item.strMeal}
      strInstructions={item.strInstructions}
      strCategory={item.strCategory}
      strArea={item.strArea}
      strMealThumb={item.strMealThumb}
      strTags={item.strTags}
      strYoutube={item.strYoutube}
      strIngredient1={item.strIngredient1}
      strIngredient2={item.strIngredient2}
      strIngredient3={item.strIngredient3}
      strIngredient4={item.strIngredient4}
      strIngredient5={item.strIngredient5}
      strIngredient6={item.strIngredient6}
      strIngredient7={item.strIngredient7}
      strIngredient8={item.strIngredient8}
      strIngredient9={item.strIngredient9}
      strIngredient10={item.strIngredient10}
      strIngredient11={item.strIngredient11}
      strMeasure1={item.strMeasure1}
      strMeasure2={item.strMeasure2}
      strMeasure3={item.strMeasure3}
      strMeasure4={item.strMeasure4}
      strMeasure5={item.strMeasure5}
      strMeasure6={item.strMeasure6}
      strMeasure7={item.strMeasure7}
      strMeasure8={item.strMeasure8}
      strMeasure9={item.strMeasure9}
      strMeasure10={item.strMeasure10}
      strSource={item.strSource}
      strInstructions={item.strInstructions}
    />
  );
  return (
    <SafeAreaView>
      <FlatList data={dataTarifDetay} renderItem={renderitemlist} />
    </SafeAreaView>
  );
};
export default DetailsScreenRecipes;
