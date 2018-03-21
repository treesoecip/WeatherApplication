import React from 'react';
import { Text, View, TextInput, Button, Linking } from 'react-native';

export default class PrakiraanCuaca extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        kota1: '',
        kota: ''


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
