import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { Button, View, Text } from 'react-native';

class KeepAwake extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
          title='Activate Keep Awake'
          onPress={ activateKeepAwake() }
        />
        <Button 
          title='Deactivate Keep Awake'
          onPress={ deactivateKeepAwake() }
        />
      </View>
    );
  }

}

export default KeepAwake;