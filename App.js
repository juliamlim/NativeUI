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
      <View style={{flex: 1, backgroundColor: colors.drk, alignItems: 'center'}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{flex:1, height:45, backgroundColor: colors.lgt}}></View>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>
          <View style={{flex:1, height:25 ,backgroundColor: colors.prm}}></View>
          <View style={{flex:1, height:25 ,backgroundColor: colors.snd}}></View>
          <View style={{flex:1, height:25 ,backgroundColor: colors.suc}}></View>
          <View style={{flex:1, height:25 ,backgroundColor: colors.dng}}></View>
          <View style={{flex:1, height:25 ,backgroundColor: colors.wrn}}></View>
        </View>
        <View style={{ flex:1, justifyContent:'center' }}>
          <View style={{ height: 100, flexDirection: 'row',justifyContent: 'space-between' }}>
            <LimboUI.Button 
              style={styles.btn.sm} 
              outline={true}
              color="suc"
              onPress={()=>{ console.log('Solid button!')}}>
              <Text style={styles.btn_otl__txt.suc}>Allo</Text>
            </LimboUI.Button>
            <LimboUI.Button 
              style={styles.btn_cr.lg} 
              color="dng"
              onPress={()=>{ console.log('Outline button!')}}>
              <Text style={styles.btn__txt}>Allo</Text>
            </LimboUI.Button>
            
          </View>              
          <View style={{ height: 100, flexDirection: 'row',justifyContent: 'space-between' }}>
            <LimboUI.Button 
              onPress={()=>{ console.log('Solid button!')}}>
              <Text style={styles.btn__txt}>Allo</Text>
            </LimboUI.Button>
            <LimboUI.Button 
              style={styles.btn_cr.md} 
              outline={true}
              onPress={()=>{ console.log('Outline button!')}}>
              <Text style={styles.btn_otl__txt.prm}>Allo</Text>
            </LimboUI.Button>
          </View>              
          <View style={{ height: 100, flexDirection: 'row',justifyContent: 'space-between' }}>
            <LimboUI.Button 
              style={styles.btn.lg} 
              color="snd"
              outline={true}
              onPress={()=>{ console.log('Solid button!') }}>
              <Text style={styles.btn_otl__txt.snd}>Allo</Text>
            </LimboUI.Button>
            <LimboUI.Button 
              style={styles.btn_cr.sm} 
              color="wrn"
              onPress={()=>{ console.log('Outline button!')}}>
              <Text style={styles.btn__txt}>Allo</Text>
            </LimboUI.Button>
          </View>              
        </View>
      </View>
    );
  }
}