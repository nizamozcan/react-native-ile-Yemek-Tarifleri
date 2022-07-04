import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import HomeScreen from './components/Sayfalar/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './components/Sayfalar/DetailsScreen';
import DetailsScreenRecipes from './components/Sayfalar/DetailsScreenRecipes';
import DetailsScreenList from './components/Sayfalar/DetailsScreenList';

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="YEMEK TARİFLERİ" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="TarifDetay" component={DetailsScreenRecipes} />
        <Stack.Screen name="tariflisteleri" component={DetailsScreenList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
