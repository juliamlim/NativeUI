import Config from 'react-native-config';
import _ from 'lodash';
import Color from 'color';

const colors = {
  prm: Config.PRIMARY_CLR || 'blue',
  snd: Config.SECONDARY_CLR || 'purple',
  suc: Config.SUCCESS_CLR || 'green',
  fal: Config.FAILURE_CLR || 'red',
  wrn: Config.WARNING_CLR || 'gold',
  drk: Config.DARK_CLR || 'black',
  lgt: Config.LIGHT_CLR || 'white',
};

colors.trans =  _.mapValues(colors, (v) => {
  return Color(v).alpha(0.5);
});


module.exports = colors;