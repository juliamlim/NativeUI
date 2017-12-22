## React Native UI Kit by InLimbo

### Contents
- [Styles](#styles)
- [Colors](#colors)
- [Buttons](#buttons)
- [Inputs](#inputs)

Classes
-xs
-sm
-md
-lg
-xl
## Styles

To import the style sheet used in the UI Kit add the following code to the component
```js
const styles = require('@_inlimbo/nativeui/styles');
```

## Colors

To change the colors used in the kit install the `react-native-config` dependency to your project 
```bash
npm i --save react-native-config
```
Then create an `.env` file in your root folder and add the folowing variables.
```env
PRIMARY_UI=
SECONDARY_UI=
SUCCESS_UI=
WARNING_UI=
DANGER_UI=
DARK_UI=
LIGHT_UI=
```
To import the colors used in the UI Kit add the following code. However colors will not work if you have set any of the environment variables above.
```js
const colors = require('@_inlimbo/nativeui/colors');
```
-prm // blue process.env.PRIMARY_CLR
-snd // purple process.env.SECONDARY_CLR

-suc // green process.env.SUCCESS_CLR
-fal // red process.env.FAILURE_CLR
-wrn // gold provess.env.WARNING_CLR

-drk // black provess.env.DARK_CLR
-lgt // white process.env.LIGHT_CLR

## Buttons
There are a few options for buttons and are built off of React Native's `TouchableHighlight` to use them in your project use the code below.
```js
import LimboUI from '@_inlimbo/nativeui';
// or
import { Button } from '@_inlimbo/nativeui';
```
There are also added color and outline options that can be added to the component to customize it. Color takes a string of one of the [defined ui colors](#colors) and outlined takes a boolean. Buttons also have small medium and large classes that can be added.
```js
// Default button
<LimboUI.Button onPress={()=>{console.log('Pressed!')}}>
  {/* Anything you want! */}
  <Text style={styles.btn__txt}>Default</Text>
</LimboUI.Button>
// Button with options
<Button onPress={()=>{console.log('Pressed!')}}
  color="snd"
  outline={true}
  style={styles.btn_cr.lg}>
  <Text style={styles.btn_otl__txt.snd}>Customized</Text>
</Button>
```


btn- // button
ipt- // input

-ot // outline
-sld // solid

## Inputs
