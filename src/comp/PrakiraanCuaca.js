import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default class PrakiraanCuaca extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: [],
        getKota: '',
        kota: '',

  };
  }



  getWeather() {
    this.setState({
      kota: this.state.getKota
    })
    return fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.state.kota + "&appid=9e7fbfd19ddf492502ca1a31dce8c3a9")
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      //console.warn('data From API', res.weather)
      this.setState({
        id: res.weather[0].id,
        main: res.weather[0].main,
        description: res.weather[0].description,
        temp: res.main.temp,
        nama: res.name

      })
    })
    // .catch((error) => {
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.boxhead}>
          <Text style={styles.texthead}>Prakiraan Cuaca</Text>
        </View>
        <View style={styles.boxslider}>
          <Text style={styles.text}>Masukkan Kota, lalu tekan CEK</Text>
          <TextInput
              style={{
                backgroundColor: 'white',
                width: 150
              }}
                onChangeText={(getKota) => this.setState({ getKota })}
          />

          <Button
              onPress={() => this.getWeather()}

              title="Cek"
              accessibilityLabel="Klik untuk mengecek"
              color='#0D47A1'
              fontColor='blue'

          />
        </View>
        <View style={styles.boxMenu}>
          <Text style={styles.textfoot} >
            Kota          : {this.state.nama} {'\n'}{'\n'}
            ID            : {this.state.id}{'\n'}
            Suhu          : {this.state.temp}{'\n'}
            Cuaca       : {this.state.main}{'\n'}
            Deskripsi : {this.state.description}{'\n'}
          </Text>
        </View>
        <View style={styles.boxfoot}>
          <Text style={styles.textfoot}>
          Copyright @tri_sucipto
          </Text>
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
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'

  },
  boxslider: {
    flex: 2,
    backgroundColor: '#0D47A1',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 15,

  },
  boxMenu: {
    flex: 3,
    backgroundColor: '#3949AB',
    margin: 15,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  boxfoot: {
    flex: 0.7,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'

  },

  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'justify',
    padding: 10
  },
  texthead: {
    fontSize: 23,
    color: 'white',
  },
  textfoot: {
    fontSize: 15,
    color: 'white',
    padding: 10
  }
})
