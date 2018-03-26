import React from 'react';
import { View, StyleSheet } from 'react-native';
//import VolumeBalok from './src/latihan/volumeBalok';
//import Header from './src/Cuaca/Header';
//import BelajarLayout from './src/comp/BelajarLayout';
//import BelajarLayout1 from './src/comp/BelajarLayout1';
import PrakiraanCuaca from './src/Cuaca/PrakiraanCuaca';
//import PrakiraanCuaca from './src/comp/PrakiraanCuaca';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
          <PrakiraanCuaca />
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
