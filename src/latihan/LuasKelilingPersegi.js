import React, { Component } from 'react';
import { AppRegistry, Button, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sisi: 0,
      luas: 0,
      keliling: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#bbdefb' }}>

        <View style={{ backgroundColor: '#2196f3' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Menghitung Luas dan Keliling Persegi
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
            <TextInput style= {{ height: 40 }} >
              placeholder="Masukkan Sisi"
              onChangeText={(sisi) => this.setState({ sisi })}
              keyboardType='numeric'
              <TextInput/>

            <Button
              onPress={()=>this.setState({
                luas: (this.state.sisi*this.state.sisi),
                keliling: (this.state.sisi*4)
              })}

              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"/>
       </View>

        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              sisi =  {this.state.sisi} {"\n"}
              Luas = {this.state.luas} {"\n"}
              Keliling = {this.state.keliling}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => App);
