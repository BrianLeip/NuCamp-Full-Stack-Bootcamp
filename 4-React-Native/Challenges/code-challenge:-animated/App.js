import * as React from 'react';
import { Text, View, StyleSheet, Animated, Easing, Button } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-elements';
 
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textScaleAnimValue: new Animated.Value(0),
      viewColorAnimValue: new Animated.Value(0),
      viewPosYAnimValue: new Animated.Value(0),
      viewBounceInAnimValue: new Animated.Value(0),
      viewOpacityAnimValue: new Animated.Value(0)
    };     
  }

  animateTextScale() {
    this.state.textScaleAnimValue.resetAnimation();
    Animated.timing(
      this.state.textScaleAnimValue,
      {
          toValue: 30,
          duration: 2000,
          useNativeDriver: true
      }
    ).start();
  }

  animateViewColor() {
    this.state.viewColorAnimValue.resetAnimation();
    Animated.timing(
      this.state.viewColorAnimValue,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }
    ).start();
  }

  animateViewPosY() {
    this.state.viewPosYAnimValue.resetAnimation();
    Animated.timing(
      this.state.viewPosYAnimValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.elastic(),
        useNativeDriver: true
      }
    ).start();
  }

  animateViewBounceIn() {
    this.state.viewBounceInAnimValue.resetAnimation();
    Animated.timing(
      this.state.viewBounceInAnimValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.bounce,
        useNativeDriver: true
      }
    ).start();
  }

  animateViewOpacity() {
    this.state.viewOpacityAnimValue.resetAnimation();
    Animated.timing(
      this.state.viewOpacityAnimValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
  }

  render() {
    const bgColor = this.state.viewColorAnimValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['blue', 'yellow', 'red']
    });

    const posY = this.state.viewPosYAnimValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -100, -300]
    })

    const posX = this.state.viewBounceInAnimValue.interpolate({
      inputRange: [0, 0, 0.5, 1],
      outputRange: [0, -200, -100, 0]
    })


    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Play around with the Animated code in the editor to learn more about how it works.
        </Text>
        <Button
          title="Click To Animate Text Scale"
          onPress={() => this.animateTextScale()}
        />
        <Button
          title="Click To Animate View Color"
          onPress={() => this.animateViewColor()}
        />
        <Button
          title="Clck To Animate View Position Y"
          onPress={() => this.animateViewPosY()}
        />
        <Button
          title="Clck To Animate View Bounce In"
          onPress={() => this.animateViewBounceIn()}
        />
        <Button
          title="Clck To Animate Opacity"
          onPress={() => this.animateViewOpacity()}
        />
        <Card>          
          <Animated.View style={{padding: 20, backgroundColor: bgColor, transform: [{translateX: posX},{translateY: posY}], opacity: this.state.viewOpacityAnimValue }}>
            <Animated.Text style={{fontSize: this.state.textScaleAnimValue, textAlign: 'center'}}>
              Animate Me 
            </Animated.Text>
          </Animated.View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
