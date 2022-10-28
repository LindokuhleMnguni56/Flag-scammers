import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useContext, useState} from 'react'
import { db, auth } from './config/firebase';
import RedPart2 from '../components/secureTopParts';
import RedPart from '../components/topPart';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'

const editProfile = () => {
const itemRef = collection(db, "flag");
const [newUpate,setNewUpdate]= useState(null);
const user = auth.currentUser
const handleUpdate = async() => {
    db()
    .collection('flags')
    .doc(newUpate.displayName)
    .update({
       displayName:newUpate.displayName 
    })
    .then(() => {
        console.log('User Updated!');
        Alert.alert(
          'Profile Updated!',
          'Your profile has been updated successfully.'
        );
      })
}

  return (
    <View style={styles.container}>
          {user != null ?(<RedPart2 />):(<RedPart />)}
      <Text>editProfile</Text>
      <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.fname : ''}
            onChangeText={(txt) => setUserData({...userData, fname: txt})}
            style={styles.textInput}
          />
    </View>
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
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      },
})