import * as React from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Card, Rating } from 'react-native-elements';
 
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      submittedMessage: ''
    }
  }

  handleSubmit() {
    this.setState({submittedMessage: `Submitted Rating: ${this.state.rating}`})
  }

  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.border}>
          <Text style={styles.title}>Overall Rating</Text>
          <Rating 
              readonly
              ratingCount={10}
              startingValue={3}
              imageSize={20}
              style={{alignItems: 'center', padding: 10}}
              type='rocket'
          />
          <Text style={styles.title}>Submit Your Rating</Text>
          <Rating
              ratingCount={10}  
              fractions={1}
              startingValue={this.state.rating}
              defaultRating={5}
              imageSize={20}
              showRating={true}
              style={{alignItems: 'center'}}
              type='rocket'
              onFinishRating={rating => this.setState({rating: rating})}
          />
          <View style={{margin: 20}}>
            <TouchableOpacity
                style={styles.btnRounded}
                onPress={() => this.handleSubmit() }
            >
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View style={{margin: 10}}>
            <Text>
              {this.state.submittedMessage}
            </Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  border: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "rgba(0, 0, 0, 0.2)"
  },
  btnRounded: {
    padding: 10,
    borderRadius:13,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
  }
});
