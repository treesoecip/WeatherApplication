import React from 'react';
import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';

const mainIcon = require('./gambar/main.png');
const tempIcon = require('./gambar/temp.png');


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
        nama: res.name,
        main: res.weather[0].main,
        desc: res.weather[0].description,
        temp: res.main.temp,
        pressure: res.main.pressure,
        humidity: res.main.humidity,
        sea: res.main.sea_level,
        ground: res.main.grnd_level,
        wind: res.wind.speed,
        sunrise: res.sys.sunrise,
        sunset: res.sys.sunset

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
          <View style={styles.boxMenu3}>
              <Text>Kota: {this.state.nama}</Text>
          </View>
          <View style={styles.boxMenu1}>
            <View style={styles.boxMenu2}>

              <Image source={tempIcon} style={styles.icon} />

              <Text>Temp: {this.state.temp}</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text>Wind Speed: {this.state.wind}</Text>
            </View>
          </View>
          <View style={styles.boxMenu1}>
            <View style={styles.boxMenu2}>
              <Text>Main: {this.state.main}</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text>Main Desc: {this.state.desc}</Text>
            </View>
          </View>
          <View style={styles.boxMenu1}>
            <View style={styles.boxMenu2}>
              <Text>Presure: {this.state.pressure}</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text>Humadity: {this.state.humidity}</Text>
            </View>
          </View>
          <View style={styles.boxMenu1}>
            <View style={styles.boxMenu2}>
              <Text>Sea Level: {this.state.sea}</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text>Ground Level: {this.state.ground}</Text>
            </View>
          </View>
          <View style={styles.boxMenu1}>
            <View style={styles.boxMenu2}>
              <Text>Sunrise: {this.state.sunrise}</Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text>Sunset: {this.state.sunset}</Text>
            </View>
          </View>

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
    flex: 4,
    backgroundColor: '#3949AB',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center'

    //justifyContent: 'center',
    //alignItems: 'center'
  },
  boxMenu1: {
    flex: 0.5,
    backgroundColor: '#9FA8DA',
    margin: 5,
    flexDirection: 'row',

  },
  boxMenu2: {
    flex: 0.5,
    backgroundColor: '#C5CAE9',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  boxMenu3: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',

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
  },
  icon: {
    tintColor: '#fff',
    height: 20,
    width: 20,
  }
})
