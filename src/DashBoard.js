/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import RecommendedProducts from './Dashboard/RecommendedProducts'
import Slider from './Dashboard/Slider'
import OfferOfTheDay from './Dashboard/OfferOfTheDay'
import ClearanceSale from './Dashboard/ClearanceSale'
import RecentlyViewItems from './Dashboard/RecentlyViewItems'
import FooterMenu from './Dashboard/FooterMenu'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class DashBoard extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={{flex: 1, }}>
        <Slider/>
        <View style={{flex: 1, padding: 10}}>
            <RecommendedProducts/>
            <OfferOfTheDay/>
            <ClearanceSale/>
            
        </View>
        <RecentlyViewItems/>
      </ScrollView>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, alignItems:'center',}}>
      <FooterMenu/>
      </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
