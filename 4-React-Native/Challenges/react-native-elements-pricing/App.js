import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PricingCard } from 'react-native-elements';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <PricingCard
        color="#4f9deb"
        title="Free"
        price="$0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
      />
      <PricingCard
        color="#4f9deb"
        title="Standard"
        price="$10"
        info={['5 Users', 'Weekday Support', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
      />
      <PricingCard
        color="#4f9deb"
        title="Pro"
        price="$25"
        info={['Unlimited Users', '24/7 Support', 'All Core Features + Pro Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
