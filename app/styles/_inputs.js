import { Platform, StyleSheet } from 'react-native';
import _ from 'lodash';
const colors = require("../../colors");

const input = StyleSheet.create({
  ipt_og: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 100,
    marginBottom: 5
  },
  ipt_og__lb: {
    color: colors.drk,
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 18
  }
});
input.ipt__lb = {
  drk: {
    color: colors.drk
  },
  lgt: {
    color: colors.lgt
  }
};
input.ipt =  {
  drk : {
    borderColor: colors.drk,
    color: colors.drk,
  },
  lgt: {
    borderColor: colors.lgt,
    color: colors.lgt
  }
};
input.ipt_ot = {
  drk: {
    borderWidth: 0,
    backgroundColor: colors.drk
  },  
  lgt: {
    borderWidth: 0,
    backgroundColor: colors.lgt
  }
};
input.ipt_mz = {
  drk: {
    borderWidth: 0,
    backgroundColor: colors.drk
  },
  lgt: {
    borderWidth: 0,
    backgroundColor: colors.lgt
  }
};
module.exports = input;