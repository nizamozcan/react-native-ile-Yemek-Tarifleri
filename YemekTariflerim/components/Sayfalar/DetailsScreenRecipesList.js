import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

const DetailsScreenRecipesList = props => {
  console.log('calıştı');
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 5}}>
        <Text
          style={{
            color: '#D2691E',
            textAlign: 'center',
            fontSize: 25,
            borderWidth: 5,
            borderRadius: 25,
            borderColor: '#D2691E',
          }}>
          {props.strMeal}
        </Text>
        <View style={styles.basliktxt}>
          <Text style={styles.baslikiceriktxt}>Type: </Text>
          <Text style={{fontWeight: '600'}}>{props.strCategory}</Text>
        </View>
        <View style={styles.basliktxt}>
          <Text style={styles.baslikiceriktxt}>Cuisine: </Text>
          <Text style={{fontWeight: '600'}}>{props.strArea}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#FAEBD7',
            flex: 1,
            borderWidth: 0.2,
            borderRadius: 2,
            marginTop: 1,
          }}>
          <Text style={{fontSize: 15, color: 'black'}}>Making </Text>
          <Text style={{fontStyle: 'italic', fontWeight: '600'}}>
            {props.strInstructions}
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            backgroundColor: '#FFDAB9',
          }}>
          MATERIALS
        </Text>
        <View
          style={{
            backgroundColor: '#FAEBD7',
            borderWidth: 0.2,
            borderRadius: 2,
            marginTop: 1,
          }}>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure1} {props.strIngredient1}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure2} {props.strIngredient2}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure3} {props.strIngredient3}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure4} {props.strIngredient4}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure5} {props.strIngredient5}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure6} {props.strIngredient6}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure7} {props.strIngredient7}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure8} {props.strIngredient8}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure9} {props.strIngredient9}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure10} {props.strIngredient10}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure11} {props.strIngredient11}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure12} {props.strIngredient12}
          </Text>
          <Text style={styles.iceriklertxt}>
            {props.strMeasure13} {props.strIngredient13}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DetailsScreenRecipesList;
const styles = StyleSheet.create({
  basliktxt: {
    flexDirection: 'row',
    backgroundColor: '#FAEBD7',
    flex: 1,
    borderWidth: 0.2,
    borderRadius: 2,
    marginTop: 1,
  },
  baslikiceriktxt: {fontSize: 15, color: 'black'},
  iceriklertxt: {color: 'black', fontWeight: '600'},
});
