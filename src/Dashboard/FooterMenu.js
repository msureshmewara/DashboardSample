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
export default class FooterMenu extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowitems}>
        <Image source={require('../image/home.png')} style={styles.customImage} />
          <Text style={styles.menuText}>Home</Text>
          
        </View>
        
        <View style={styles.rowitems}>
        <Image source={require('../image/search.png')} style={styles.customImage} />
          <Text style={styles.menuText}>Search</Text>
          
        </View>

        <View style={styles.rowitems}>
        <Image source={require('../image/timeline.png')} style={styles.customImage} />
          <Text style={styles.menuText}>Timeline</Text>
          
        </View>
        <View style={styles.rowitems}>
        <Image source={require('../image/chat.png')} style={styles.customImage} />
          <Text style={styles.menuText}>Chat</Text>
          
        </View>
        <View style={styles.rowitems}>
        <Image source={require('../image/profile.png')} style={styles.customImage} />
          <Text style={styles.menuText}>Profile</Text>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#E5E4E2',
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  rowitems: {
    flex: 0.30,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  menuText: {
    fontSize: 8,
    paddingLeft: 10,
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  customImage: {
    width: 32,
    height: 32,
    marginLeft: 10,
  }
});
