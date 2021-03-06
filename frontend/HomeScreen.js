import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, AsyncStorage} from 'react-native';

export default function HomeScreen() {

 const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Twitcoin</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
     onChangeText={text => onChangeText(text)}
     value={value}
     />
      <View style={styles.buttons}>
      <Button  title="Search" />
      </View>
  <Text>Type a search item and some AI magic will try to valuate its positivity using data from Twitter and the stock markets around the world.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  tInput: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 10,
    borderRadius: 5,
    width: '50%',
    backgroundColor: '#ffffff70'
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
});
