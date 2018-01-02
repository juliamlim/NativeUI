import Config from 'react-native-config';
import _ from 'lodash';
import Color from 'color';

const colors = {
  prm: Config.PRIMARY_CLR || 'rgb(148, 171, 244)',
  snd: Config.SECONDARY_CLR || 'rgb(178, 221, 210)',
  suc: Config.FAILURE_CLR || 'rgb(76, 205, 143)',
  dng: Config.SUCCESS_CLR || 'rgb(229, 108, 129)',
  wrn: Config.WARNING_CLR || 'rgb(241, 173, 92)',
  drk: Config.DARK_CLR || 'rgb(71, 76, 110)',
  lgt: Config.LIGHTest_CLR || 'rgb(242,239,235)',
};

var trans =  _.mapValues(colors, (v) => {
  return Color(v).alpha(0.3);
});
var dark =  _.mapValues(colors, (v) => {
  return Color(v).darken(0.3);
});
var light =  _.mapValues(colors, (v) => {
  return Color(v).lighten(0.05);
});

colors.trans = trans;
colors.dark = dark;
colors.light = light;

console.log(colors);

module.exports = colors;