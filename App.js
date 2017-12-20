import React, { Component } from 'react';
import {
  Text,
  View,
  Modal
} from 'react-native';
import LimboUI from './app/nativeui';

var styles = require('./app/styles/main');

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <LimboUI.Button 
          style={styles.btn_cr} 
          color="suc"
          outline={true}
          onPress={()=>{
            alert('hi')
          }}
          />
      </View>
    );
  }
}