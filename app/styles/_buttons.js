import { Platform, StyleSheet } from 'react-native';
import _ from 'lodash';
const colors = require("./_colors");

const button = StyleSheet.create({
  btn_og: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.prm,
    borderRadius: 100
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
  return {
    paddingHorizontal:( ( v * v / 4 ) + 0.5 ) * 50 ,
    paddingVertical: v * 5,  
  };
});

button.btn_cr = _.mapValues(sizes, v => {
  let size = ( v + 1 ) / 0.04;
  return {
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: size,
    height: size,
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