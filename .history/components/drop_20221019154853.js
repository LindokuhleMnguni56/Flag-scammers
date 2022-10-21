import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerExample extends Component {
   state = {type: ''}
   updateUser = (type) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.type} onValueChange = {this.updateType}>
               <Picker.Item label = "email" value = "email" />
               <Picker.Item label = "address" value = "address" />
           
            </Picker>
            <Text style = {styles.text}>{this.state.type}</Text>
         </View>
      )
   }
}
export default PickerExample

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})