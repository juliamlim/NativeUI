import React, { Component } from 'react';
import {
  Text,
  View,
  Modal
} from 'react-native';
import LimboUI from './nativeui';
import { Button } from './nativeui';

var styles = require('./styles');
var colors = require('./colors');

styles.color = {
  flex: 1, 
  height: 25,
  padding: 5,
  justifyContent:'center'
};

const Color_Block = ({color, name}) => (
  <View style={[styles.color, { backgroundColor: color }]}>
    <Text style={{color: colors.drk}}>{name}</Text>
  </View>
);

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.drk, alignItems: 'center'}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{flex:1, height:45, backgroundColor: colors.lgt}}></View>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>
          <Color_Block name="prm" color={colors.prm}/>
          <Color_Block name="snd" color={colors.snd}/>
          <Color_Block name="suc" color={colors.suc}/>
          <Color_Block name="dng" color={colors.dng}/>
          <Color_Block name="wrn" color={colors.wrn}/>
        </View>
        <View style={{ flex:1, justifyContent:'center' }}>
            <LimboUI.Input 
              label="Email"
              inverse={true}
              text={this.state.email}
              onChangeText={text => this.setState({email:text})} 
              />
          <View style={{flexDirection: 'row',justifyContent: 'space-between' }}>
            <LimboUI.Button 
              style={styles.btn.sm} 
              outline={true}
              color="suc"
              onPress={()=>{ console.log('Solid button!')}}>
              <Text style={styles.btn_otl__txt.suc}>Asdfjsd</Text>
            </LimboUI.Button>
            <LimboUI.Button 
              style={[styles.btn_cr.sm, {marginLeft: 20}]} 
              color="wrn"
              onPress={()=>{ console.log('Outline button!')}}>
              <Text style={styles.btn__txt}>Allo</Text>
            </LimboUI.Button>
          </View>              
          <View style={{ height: 100, flexDirection: 'row',justifyContent: 'space-between' }}>
            <LimboUI.Button 
              onPress={()=>{ console.log('Solid button!')}}>
              <Text style={[styles.btn__txt]}>Asdfjsd</Text>
            </LimboUI.Button>
            <LimboUI.Button 
              style={[styles.btn_cr.md, {marginLeft: 20}]} 
              outline={true}
              onPress={()=>{ console.log('Outline button!')}}>
              <Text style={styles.btn_otl__txt.prm}>Allo</Text>
            </LimboUI.Button>
          </View>              
          <View style={{flexDirection: 'row',justifyContent: 'space-between', width: 250 }}>
          <LimboUI.Button
            onPress={()=>{console.log('Pressed!')}}>
            {/* Anything you want! */}
            <Text style={styles.btn__txt}>Default</Text>
          </LimboUI.Button>
          <Button
            color="wrn"
            // outline={true}
            style={styles.btn_cr.lg}
            onPress={()=>{console.log('Pressed!')}}>
            <Text style={styles.btn__txt}>Customized</Text>
          </Button>
          </View>              
        </View>
      </View>
    );
  }
}