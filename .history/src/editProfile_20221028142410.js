import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useContext, useState} from 'react'
import { db, auth } from './config/firebase';
import RedPart2 from '../components/secureTopParts';
import RedPart from '../components/topPart';

const editProfile = () => {
    const user = auth.currentUser
 

  return (
    <View>
          {user != null ?(<RedPart2 />):(<RedPart />)}
      <Text>editProfile</Text>
    </View>
  )
}

export default editProfile

const styles = StyleSheet.create({

})