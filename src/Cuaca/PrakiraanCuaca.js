import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class PrakiraanCuaca extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        kota1: '',
        kota: '',
        getWeather: ''


  };
  }
  render() {
    return (
      <View>
        <Text>
          Masukkan Kota, lalu tekan tombol Cek
        </Text>
        <TextInput
          //OnSubmitEditing={
          //  (event) => this.setState({ kota: event.nativeEvent.text })
          //}
          onChangeText={(kota1) => this.setState({ kota1 })}
        />


        <View style={{ paddingTop: 10, padding: 40, paddingBottom: 10 }}>
        <Button
          onPress={() => this.setState({
            kota: (this.state.kota1)
          })}

          title="Cek"
          accessibilityLabel="Klik untuk mengecek"
          color='purple'

          />
          </View>

          <Text>{'\n'}Kota  : {this.state.kota}</Text>

      </View>
    );
  }

}

// getWeather= () => {
// 	Let url = 'http://api.openweathermap.org/data/2.5/weather?q='
//   + this.state.kota + '&appid=9e7fbfd19ddf492502ca1a31dce8c3a9';
//   fetch (url)
//   .then ((response) => response.json())
//   .then ((responseJson) => {
//   	console.log(responseJson);
//   		this.setState({
//   			forecast: {
//   				main: responseJson.weather[0].main,
//   				description: responseJson.weather[0].description,
//   				temp: responseJson.main.temp
//   			}
//   		});
//   	}
//   );
// }
