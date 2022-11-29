import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Tts from 'react-native-tts';
import Slider from '@react-native-community/slider';
import {LIGHT_THEME_ICON} from './constants/images';
import SplashScreen from 'react-native-splash-screen';

Tts.setDefaultLanguage('en-GB');
Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact');

const App = () => {
  const [currentText, setChangeCurrentText] = useState('');
  const [sliderValue, setSliderValue] = useState(0);
  // const [rate, setRate] = useState('0.8');

  // useEffect(() => {
  //   Tts.setDefaultRate(0.1);
  // }, []);

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 5000);
  }, []);

  const speak = async () => {
    // await Tts.setDefaultRate(parseInt(rate, 10));
    Tts.setDefaultRate(0.1);
    Tts.speak(`${currentText}`);
    setChangeCurrentText('');
  };

  const slider = (value: any) => {
    setSliderValue(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{sliderValue}</Text>
        <Slider
          // eslint-disable-next-line react-native/no-inline-styles
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="red"
          maximumTrackTintColor="grey"
          thumbTintColor="red"
          step={1}
          value={sliderValue}
          onValueChange={slider}
          thumbImage={LIGHT_THEME_ICON}
        />
        <TextInput
          style={styles.input}
          onChangeText={setChangeCurrentText}
          value={currentText}
        />
        {/* <TextInput style={styles.input} onChangeText={setRate} value={rate} /> */}
        <Button title="Speak!" onPress={speak} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  input: {
    color: 'black',
  },
  slider: {
    marginHorizontal: 24,
    opacity: 1,
    // transform: [{scaleX: 1.2}, {scaleY: 1.2}],
  },
});

export default App;
