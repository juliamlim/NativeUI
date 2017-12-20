import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const styles = require('../styles/main');
const colors = require('../styles/_colors');

export default class Button extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { 
      title: "Button",
      color: "prm"
    };
  }
  componentDidMount() {
    if (this.props.color) {
      this.setState({color: this.props.color});
    }
  }
  render() {
    return (
      <View style={{ justifyContent:'center'}}>
        <TouchableHighlight
          style={[
            styles.btn, 
            this.props.style, 
            (this.props.outline) ? styles.btn_otl[this.state.color] : styles.btn_sld[this.state.color]
          ]}
          onPress={this.props.onPress}
          underlayColor={ 
            (this.props.outline) ? colors.trans[this.state.color] : colors.light[this.state.color]
            }>
          {this.props.children}
        </TouchableHighlight>
      </View>      
    );
  }
}