/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class RecommendedProducts extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.offerHeading}>
        <Text style={styles.productname}>Recently View Items</Text>
        <Text style={styles.marginRight}>Explore All </Text>
      </View>
        <ScrollView horizontal={true}>
            <View style={styles.containerSub}>
        <View style={styles.rowitems}>
        <Image source={{ uri: 'https://placeimg.com/640/640/beer' }} style={styles.customImage} />
          <Text numberOfLines={1}
          ellipsizeMode='tail' style={styles.productDescription}>Flora Long Dress</Text>
          <View style={styles.productPrice}>
              <Text style={styles.productDiscountPrice}>{'\u20B9'} 780</Text>
              <Text style={styles.productActualPrice}>{'\u20B9'} 1100</Text>
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

        <View style={styles.rowitems}>
        <Image source={{ uri: 'https://placeimg.com/640/640/nature' }} style={styles.customImage} />
          <Text numberOfLines={1}
          ellipsizeMode='tail' style={styles.productDescription}>Women A-Line Dress</Text>
          <View style={styles.productPrice}>
              <Text style={styles.productDiscountPrice}>{'\u20B9'} 920</Text>
              <Text style={styles.productActualPrice}>{'\u20B9'} 1100</Text>
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
        </ScrollView>
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
  },
  containerSub: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#737CA1',
  },
  offerHeading: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#F2F2F2'
  },
  offerExplore: {
    fontSize: 15,
    marginRight: 10,
    color: '#C0C0C0',
  },
  rowitems: {
    flex: 0.30,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#737CA1',
    flexDirection:'column',
    backgroundColor: '#737CA1',
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
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#737CA1',
  }
});
