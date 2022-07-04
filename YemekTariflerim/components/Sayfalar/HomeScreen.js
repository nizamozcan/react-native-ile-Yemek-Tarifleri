import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import axios from 'axios';
import Data from './Data';
import {useNavigation} from '@react-navigation/native';
import DetailsScreen from './DetailsScreen';

export default HomeScreen = () => {
  const navigation = useNavigation();
  const [datalar, Setdata] = useState([]);
  async function GetData() {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    );
    //console.log(response.data.categories);
    Setdata(response.data.categories);
  }

  const renderitem = ({item}) => (
    <Data
      strCategory={item.strCategory}
      strCategoryThumb={item.strCategoryThumb}
    />
  );
  useEffect(() => {
    GetData();
  }, []);
  return (
    <SafeAreaView>
      <FlatList data={datalar} renderItem={renderitem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
