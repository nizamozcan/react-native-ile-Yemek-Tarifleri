import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DetailsScreen from './DetailsScreen';
import axios from 'axios';

const Data = props => {
  const navigation = useNavigation();

  const onpresss = () => {
    navigation.navigate('DetailsScreen', {strCategory: props.strCategory});
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onpresss}>
        <View style={styles.ssss}>
          <View style={styles.asd}>
            <Image
              style={styles.pngstil}
              source={{uri: props.strCategoryThumb}}
            />
          </View>

          <Text style={styles.txtcategory}>{props.strCategory} </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Data;
const styles = StyleSheet.create({
  container: {backgroundColor: 'black', flex: 1},
  pngstil: {
    height: 100,
    width: 100,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  txtcategory: {color: 'white', fontSize: 20},

  ssss: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  asd: {width: 200, marginStart: 2},
});
