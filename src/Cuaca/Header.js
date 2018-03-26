import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.contHeader}>
      <Text style={styles.textHeader}>
        {props.headerText}</Text>
    </View>
  );

}

const styles = {
  contHeader: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    height: 55,
    position: 'relative'
  },
  textHeader: {
    color: 'white',
    fontSize: 20,
  }

}
export default Header;
