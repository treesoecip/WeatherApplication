import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.boxhead}>
          <Text style={styles.texthead}>Mobile | Belajar Layout</Text>
        </View>
        <View style={styles.boxbody}>
          <View style={styles.boxBodyLeft}>
            <Text style={styles.textMenu}>Menu1{'\n'}- 1.1{'\n'}- 1.2{'\n'}- 1.3</Text>
            <Text style={styles.textMenu}>Menu2{'\n'}- 2.1{'\n'}- 2.2{'\n'}- 2.3</Text>
          </View>
          <View style={styles.boxBodyRight}>
            <Text style={styles.text}>
              Jurusan Pendidikan Teknik Informatika merupakan salah satu jurusan
               yang ada di Fakultas Teknik dan Kejuruan yang berada pada
               Universitas Pendidikan Ganesha. Jurusan ini pada awalnya
               bernama Jurusan Pendidikan Teknologi Informatika dan
               Komputer. Kemudian pada tahun 2009 berdasarkan SK DIKTI
               No. 163/DIKTI/Kep/2007, dan SK Rektor Undiksha No.
               257/H48/PP/2009, Jurusan Pendidikan Teknologi Informatika
               dan Komputer resmi berganti nama menjadi Jurusan Pendidikan
               Teknik Informatika.
            </Text>
            <Button
              onPress={() => this.setState({
              })}

              title="More Information ..."
              color='#616161'
            />
          </View>
        </View>
        <View style={styles.boxfoot}>
          <Text style={styles.textfoot}>Pendidikan Teknik Informatika | UNDIKSHA</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column'
  },
  boxhead: {
    flex: 0.5,
    backgroundColor: 'blue',
    padding: 10

  },
  boxfoot: {
    flex: 0.5,
    backgroundColor: 'white',
    justifyContent: 'center',

  },
  boxbody: {
    flex: 8,
    backgroundColor: '#1E88E5',
    flexDirection: 'row'
  },
  boxBodyLeft: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  boxBodyRight: {
    flex: 5,
    backgroundColor: '#F5F5F5',
    padding: 7,
    paddingTop: 2,
  },
  textMenu: {
    fontSize: 16,
    color: 'black'
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'justify'
  },
  texthead: {
    fontSize: 25,
    color: 'white',
  },
  textfoot: {
    fontSize: 15,
    color: 'black',
    padding: 10
  }
})
