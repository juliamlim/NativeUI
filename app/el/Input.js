import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Animated,
  Easing
} from 'react-native';
const styles = require('../styles/main');

export default class Input extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <Animated.View>
        <Text style={[ styles.ipt_og__lb,
          (this.props.inverse) ? styles.ipt__lb.lgt : styles.ipt__lb.drk,
          
          ]}>{this.props.label}</Text>
        <TextInput 
        {...this.props}
        style={[styles.ipt_og, 
          (this.props.inverse) ? styles.ipt.lgt : styles.ipt.drk,
          this.props.style]}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text} />
      </Animated.View>      
    );
  }
}