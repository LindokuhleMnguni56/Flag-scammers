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



const user=auth.currentUser

const [userData, setUserData] = useState(null);

const handleUpdate = async() => {
    let imgUrl = await uploadImage();

    if( imgUrl == null && userData.userImg ) {
      imgUrl = userData.userImg;
    }