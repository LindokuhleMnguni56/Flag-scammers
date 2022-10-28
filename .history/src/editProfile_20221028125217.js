import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import { db } from './config/firebase';
import { auth } from './config/firebase';



const EditProfileScreen = () => {

const user=auth.currentUser

const [userData, setUserData] = useState(null);

const handleUpdate = async() => {
    firestore()
    .collection('users')
    .doc(user.displayName)
    .update({
      fname: userData.dname, })
      .then(() => {
        console.log('User Updated!');
        Alert.alert(
          'Profile Updated!',
          'Your profile has been updated successfully.'
        );
      })
    }
    return(
        
    )
}
