import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight
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
      <TouchableHighlight
        style={[
          styles.btn, 
          this.props.style, 
          (this.props.outline) ? styles.btn_otl[this.state.color] : styles.btn_sld[this.state.color]
        ]}
        onPress={this.props.onPress}
        underlayColor={ colors.trans[this.state.color] }>
        <Text style={
          (this.props.outline) ? styles.btn_otl__txt[this.state.color] : styles.btn__txt
          }>Test Text</Text>
      </TouchableHighlight>
    );
  }
}