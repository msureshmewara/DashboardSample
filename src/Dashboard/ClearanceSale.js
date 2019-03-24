/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class ClearanceSale extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.offerHeading}>
        <Text style={styles.clearanceSaleHeading}>Clearance Sale</Text>
        <Text style={styles.offerDiscountPercentage}>UP TO 70% OFF </Text>
      </View>
      <View style={styles.containerSub}>
      <View style={styles.rowitems}>
      <Image source={{ uri: 'https://placeimg.com/640/640/beer' }} style={styles.customImage} />
        <Text numberOfLines={1}
          ellipsizeMode='tail' style={styles.productDescription}>Flora Long Dress</Text>
        <View style={styles.productPrice}>
            <Text style={styles.productDiscountPrice}>{'\u20B9'} 780</Text>
        </View>
      </View>
      
      <View style={styles.rowitems}>
      <Image source={{ uri: 'https://placeimg.com/640/640/nature' }} style={styles.customImage} />
        <Text numberOfLines={1}
          ellipsizeMode='tail' style={styles.productDescription}>Women A-Line Dress</Text>
        <View style={styles.productPrice}>
            <Text style={styles.productDiscountPrice}>{'\u20B9'} 920</Text>
        </View>
        
      </View>

      <View style={styles.rowitems}>
      <Image source={{ uri: 'https://placeimg.com/640/640/nature' }} style={styles.customImage} />
        <Text numberOfLines={1}
          ellipsizeMode='tail' style={styles.productDescription}>Women A-Line Dress</Text>
        <View style={styles.productPrice}>
            <Text style={styles.productDiscountPrice}>{'\u20B9'} 920</Text>
            <Text style={styles.productActualPrice}>{'\u20B9'} 1100</Text>
        </View>
      </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    marginTop: 10,
    justifyContent: 'space-between',
    shadowColor: '#C5C8C7',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  containerSub: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    justifyContent: 'space-around'
  },
  offerHeading: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#F2F2F2'
  },
  clearanceSaleHeading: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingLeft: 10,  
    color: '#C0C0C0',
  },
  offerDiscountPercentage: {
    fontSize: 25,
    marginRight: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  rowitems: {
    flex: 0.30,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F2F2F2',
    flexDirection:'column',
    backgroundColor: '#F2F2F2',
  },
  productname: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,  
  },
  productDescription: {
    fontSize: 15,
    paddingLeft: 10,
    color: '#C0C0C0',
  },
  productPrice: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  productDiscountPrice: {
    fontSize: 15,
    paddingLeft: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  productActualPrice: {
    fontSize: 15,
    paddingRight: 10,
    color: '#C0C0C0',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  productFavorites: {
    fontSize: 15,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  productmore: {
    fontSize: 15,
    marginRight: 10,
    color: '#000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  customImage: {
    flex: 1,
    width: "70%",
    height: 70,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F2F2F2',
    justifyContent: 'space-between',
    transform: [{ rotate: '45deg'}],
  }
});
