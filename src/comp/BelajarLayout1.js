import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.boxhead}>
          <Text style={styles.texthead}>Pendidikan Teknik Informatika</Text>
        </View>

        <View style={styles.boxslider}>
          <Text style={styles.textslider}>Slider</Text>
        </View>

        <View style={styles.boxMenu}>
          <View style={styles.boxMenu1}>
            <View style={styles.boxMenu2}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text style={styles.text}>4</Text>
            </View>
          </View>
          <View style={styles.boxMenu1}>
            <View style={styles.boxMenu2}>
              <Text style={styles.text}>5</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text style={styles.text}>6</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text style={styles.text}>7</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text style={styles.text}>8</Text>
            </View>
          </View>

        </View>

        <View style={styles.boxfoot}>
          <Text style={styles.textfoot}>#JaenKuliahDiPTI</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BDBDBD',
    flex: 1,
    flexDirection: 'column'
  },
  boxhead: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'

  },
  boxslider: {
    flex: 4,
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    justifyContent: 'center'


  },
  boxMenu: {
    flex: 2.5,
    backgroundColor: '#3949AB',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxMenu1: {
    flex: 1,
    backgroundColor: '#3949AB',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    flexDirection: 'row'
  },
  boxMenu2: {
    flex: 1,
    backgroundColor: '#9E9E9E',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 2,
  },

  boxfoot: {
    flex: 1.5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    margin: 5,
    alignItems: 'center'

  },

  textslider: {
    fontSize: 16,
    color: 'white'
  },
  text: {
    fontSize: 30,
    color: 'black',
    textAlign: 'justify'
  },
  texthead: {
    fontSize: 25,
    color: 'white',
  },
  textfoot: {
    fontSize: 15,
    color: 'white',
    padding: 10
  }
})
