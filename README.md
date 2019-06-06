### R.T.G React Native Social Buttons

## Installation

Since the library is a JS-based solution, to install the latest version of `rtg-rn-social-buttons` you only need to run:

```bash
npm install --save rtg-rn-social-buttons
```
## Basic Usage

Just Import and use <SocialButton> Component in your react-native expo as well as ejected apps
a basic example is as below 

```jsx
import React from "react";
import { View ,Alert} from "react-native";
import SocialButton from "rtg-rn-social-buttons";

alertme=()=>{
    Alert.alert('action');
}

export default class App extends React.Component {
  render() {
    return (
      <View>
        <SocialButton type='facebook' text='Login With Facebook' opacity={0.5} height={40} width={220} action={this.alertme}/>
      </View>
    );
  }
}
```

You can Pass these types of props to your App

## Props

| Property               | Default                  | In Message Object | Description                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type            | `none`                   | Yes               | Controls Buttton Type like `facebook`,`google`,`twitter`,`github`,`microsoft`,`linkedin`,`amazon`                                                                                                                                                                                                                                             |
| text                | `none`                   | Yes               | Display Text on the Button                                                                                                                                                                         |
| height               | `none`                   | Yes               | Adjust height of the button                                                                                                                                                                             |
| width      | `none`                    | Yes               | Display width of the button                                                                                                                                                                                                                                                                        |
| opacity               | `none`                   | Yes               | Controls the opacity of the button                                                                                                                                                                                                                          |
| action                | `none`                   | Yes               | Contains Action performed on the button                                                                                                                                                                                               |
                                                                                                                                                                                                |

                                                                                            

## Try it out

You can try out the [rtg-rn-social-Button Playground app](https://expo.io/@priyanshu/rtg-react-native-social-buttons) to get a tease of the functionalities of this lib.

## Documentation

More details and usages will coming soo

##Screenshots
<p>
<img src="https://imgur.com/0i3JNJq"  style="border: 0; width: 86%; min-width: 240px; max-width: 100%;" />
</p>
