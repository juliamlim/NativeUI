import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Animated,
  Easing
} from 'react-native';

const styles = require('../styles/main');
const colors = require('../styles/_colors');

export default class Button extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { 
      color: "prm",
      scale: new Animated.Value(1),
      y: new Animated.Value(0)
    };
  }
  componentDidMount() {
    if (this.props.color) {
      this.setState({color: this.props.color});
    }
  }
  render() {
    return (
      <Animated.View style={{
        justifyContent: 'center',
        transform: [
          {scale: this.state.scale},
          {translateY: this.state.y}
        ],
        }}>
        <TouchableHighlight
          style={[
            styles.btn_og,
            styles.btn.md,
            {
              shadowColor: colors.dark.drk,
              shadowOpacity: 0.5,
              shadowRadius: 5,
              shadowOffset: {
                height: 2,
              }
            },
            this.props.style, 
            (this.props.outline) ? styles.btn_otl[this.state.color] : styles.btn_sld[this.state.color]
          ]}
          onPress={this.props.onPress}
          underlayColor={ 
            (this.props.outline) ? colors.trans[this.state.color] : colors.light[this.state.color]
            }
          onShowUnderlay={() => {
            Animated.parallel([
              Animated.spring( this.state.scale, {
                toValue: 0.95
              }),
              Animated.spring( this.state.y, {
                toValue: 4
              })
            ]).start();            
          }}
          onHideUnderlay={() => {
            Animated.parallel([
              Animated.spring( this.state.scale, {
                toValue: 1
              }),
              Animated.spring( this.state.y, {
                toValue: 0
              })
            ]).start();   
          }}>
          {this.props.children}
        </TouchableHighlight>
      </Animated.View>      
    );
  }
}
// onShowUnderlay onHideUnderlay