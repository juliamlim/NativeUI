import { Platform, StyleSheet } from 'react-native';
const colors = require("../../colors");

const shadow = StyleSheet.create({
  sh_1: {
    shadowColor: colors.dark.drk,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 4,
    }
  },
  sh_2: {
    
  },
  sh_3: {
    shadowColor: colors.dark.drk,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
    }
  },
});

module.exports = shadow;