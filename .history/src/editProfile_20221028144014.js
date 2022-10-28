import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useContext, useState} from 'react'
import { db, auth } from './config/firebase';
import RedPart2 from '../components/secureTopParts';
import RedPart from '../components/topPart';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'

const editProfile = () => {
const itemRef = collection(db, "flag");
const user = auth.currentUser
const handleUpdate = async() => {
    db()
    .collection('flags')
    .doc(user.displayName)
    .update({
       displayName: 
    })
}

  return (
    <View style={styles.container}>
          {user != null ?(<RedPart2 />):(<RedPart />)}
      <Text>editProfile</Text>
    </View>
  )
}

export default editProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: '100%',
        width: '100%'
    },
})