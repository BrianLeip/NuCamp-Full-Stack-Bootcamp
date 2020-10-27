import React, { Component } from 'react';
import { View } from 'react-native';
import FilmCatalogue from './components/FilmCatalogueComponent';

/* Go to components/FilmCatalogueComponent.js for your code challenge. App.js does not need any updates. */

export default class App extends Component {
  render() {
    return (
      <View>
          <FilmCatalogue />
      </View>
    );
  }
}