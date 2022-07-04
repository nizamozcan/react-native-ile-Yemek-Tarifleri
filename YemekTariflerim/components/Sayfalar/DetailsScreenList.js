import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const DetailsScreenList = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const onPressimage = () => {};
  const onPressMenu = () => {
    navigation.navigate('TarifDetay', {idMeal: props.idMeal});
  };
  return (
    <View style={styles.container}>
      {props.strCategoryb == props.strCategory ? (
        <TouchableOpacity onPress={onPressMenu}>
          <View style={styles.viewmenuler}>
            <TouchableOpacity onPress={onPressimage}>
              <View style={{height: 100, width: 100}}>
                <Image
                  style={styles.imageview}
                  source={{uri: props.strMealThumb}}
                />
              </View>
            </TouchableOpacity>

            <View style={{marginStart: 50}}>
              <Text style={styles.txtmenuler}>{props.strMeal}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default DetailsScreenList;

const styles = StyleSheet.create({
  container: {backgroundColor: 'black'},
  txtmenuler: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  viewmenuler: {
    height: 100,
    backgroundColor: 'white',
    marginTop: 2,
    flexDirection: 'row',
  },
  imageview: {
    height: 100,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginStart: 1,
  },
});
