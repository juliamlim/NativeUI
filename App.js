import React, { Component } from 'react';
import {
  Text,
  View,
  Modal
} from 'react-native';
import LimboUI from './app/nativeui';

var styles = require('./app/styles/main');
var colors = require('./app/styles/_colors');

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.lgt, alignItems: 'center'}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{flex:1, height:45, backgroundColor: colors.lgt}}></View>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>
          <View style={{flex:1, height:25 ,backgroundColor: colors.prm}}></View>
          <View style={{flex:1, height:25 ,backgroundColor: colors.snd}}></View>
          <View style={{flex:1, height:25 ,backgroundColor: colors.suc}}></View>
          <View style={{flex:1, height:25 ,backgroundColor: colors.fal}}></View>
          <View style={{flex:1, height:25 ,backgroundColor: colors.wrn}}></View>
        </View>
        <View style={{ flex:1, justifyContent:'center' }}>
          <View style={{  flexDirection: 'row',justifyContent: 'space-between' }}>
            <LimboUI.Button 
              style={styles.btn_rd} 
              onPress={()=>{ console.log('Solid button!') }}>
              <Text style={styles.btn__txt}>Allo</Text>
            </LimboUI.Button>
            <LimboUI.Button 
              style={styles.btn_cr} 
              color="wrn"
              outline={true}
              onPress={()=>{ console.log('Outline button!')}}>
              <Text style={styles.btn_otl__txt.wrn}>Allo</Text>
            </LimboUI.Button>
          </View>              
        </View>
      </View>
    );
  }
}