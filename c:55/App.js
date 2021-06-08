import * as React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import {Audio} from 'expo-av';


class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay:true}
     )
  }

  render() {
    return (
    <TouchableOpacity style={{
          width:200,
          height:200,
          borderRadius:190,
          backgroundColor:'red',
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center"
          
          }}
          onPress={this.playSound}
          >
          <Text> Press Me </Text>
          </TouchableOpacity>

    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
       <SoundButton/>
       
      </View>
    );
  }
}


