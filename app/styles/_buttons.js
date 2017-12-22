import { Platform, StyleSheet } from 'react-native';
import _ from 'lodash';
const colors = require("./_colors");

const button = StyleSheet.create({
  btn_og: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.prm,
    borderRadius: 100,
    margin: 5
  },
  btn__txt: {
    color: colors.lgt,
    textAlign: 'center'
  }
});

var sizes = {
  sm: 1,
  md: 2,
  lg: 3
};

button.btn = _.mapValues(sizes, v => {
  var size = (50 * v) + 10;
  return {
    minWidth: size,
    maxWidth: 300,
    paddingVertical: 6 * v,  
    paddingHorizontal: 6 * v + 8,  
  };
});

button.btn_cr = _.mapValues(sizes, v => {
  var size = (30 * v) + 10;
  return {
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: size,
    height: size,
    minWidth: 0,
    borderRadius: 1000
  };
});

button.btn_sld = _.mapValues(colors, v => {
  return { backgroundColor: v };
});
button.btn_otl = _.mapValues(colors, v => {
  return {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: v 
  };
});
button.btn_otl__txt = _.mapValues(colors, v => {
  return {
    backgroundColor: 'transparent',
    color: v 
  };
});

module.exports = button;