import React from 'react';
import { View, StyleSheet } from 'react-native';
//import VolumeBalok from './src/latihan/volumeBalok';
//import Header from './src/Cuaca/Header';
import BelajarLayout from './src/comp/BelajarLayout';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
          <BelajarLayout />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1
  }
  }
);
