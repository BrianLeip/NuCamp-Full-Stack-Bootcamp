import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function CampsiteInfo(props) {
  return <RenderCampsite campsite={props.campsite} />;
}

export default CampsiteInfo;