import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useContext, useState} from 'react'

const editProfile = () => {
    const getUser = async() => {
        const currentUser = await firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            console.log('User Data', documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        })
      }

  return (
    <View>
      <Text>editProfile</Text>
    </View>
  )
}

export default editProfile

const styles = StyleSheet.create({

})