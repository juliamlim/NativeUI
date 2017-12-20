import { Platform, StyleSheet } from 'react-native';
import _ from 'lodash';
const colors = require("./_colors");

const button = StyleSheet.create({
  btn: {
    width: 130,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.prm
  },
  btn__txt: {
    color: colors.lgt,
    textAlign: 'center'
  },
  btn_rd: {
    borderRadius: 100,
  },
  btn_cr: {
    width: 60,
    height: 60,
    borderRadius: 100,    
  }
});

button.btn_sld = _.mapValues(colors, (v) => {
  return { backgroundColor: v };
});
button.btn_otl = _.mapValues(colors, (v) => {
  return {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: v 
  };
});
button.btn_otl__txt = _.mapValues(colors, (v) => {
  return {
    backgroundColor: 'transparent',
    color: v 
  };
});

module.exports = button;