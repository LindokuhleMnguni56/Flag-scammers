import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerExample extends Component {
    writeUserData(email,){
        firebase.database().ref('/').push({
            email,
          
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }


   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "email" value = "email" />
               <Picker.Item label = "address" value = "address" />
              
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
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