import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { FILMS } from '../shared/films';
 
 /*
  When working correctly, when you hit "Tap to play" in the simulated mobile device to the right, you will see a list of films from shared/films.js.
  Before updating this code:
   - You must be logged into your Expo account (create an account if you do not have one already)
   - Use the Save button on the upper right corner to fork this Snack to your account. Name it as you please, or accept the default random name. 
  Share the link to your version in the forum for this code challenge. 

  Your challenges:  1. Fix the component by adding a constructor and adding the data imported as FILMS to the component's state
                    2. In the FlatList, use that state data for films in the 'data' attribute.
                    3. In the ListItem, add the film title as the title, and the director as the subtitle.
                    4. Update films.js to add a third film of your choice. 
  Bonus Challenge: Write a custom view in the ListItem subtitle to show more details about each film, such as the release year, genre, language.
*/
class FilmCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = { films: FILMS };
  }

  render() {
    const renderFilm = ({item}) => {
        return (
            <ListItem
                title={item.title}
                subtitle={ item.director + " (" + item.year + ")" }
            />
        );
    };

    return (
        <Card title="Film Catalogue">
          <FlatList 
              data={ this.state.films }
              renderItem={renderFilm}
              keyExtractor={item=>item.id.toString()}
          />
        </Card>
    );
  } 
}

export default FilmCatalogue;