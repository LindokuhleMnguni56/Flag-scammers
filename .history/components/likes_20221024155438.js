import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      likes: 1,
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes(props) {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }


  }

  render(){

    return(
        <View>
            <Text Onclick={this.updateLikes}>like</Text>
            <Text>{this.state.likes}</Text>

        </View>
        

    );

  }


}

export default Likes;
