import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, {useEffect, useContext, useState} from 'react'
import { db, auth } from './config/firebase';
import RedPart2 from '../components/secureTopParts';
import RedPart from '../components/topPart';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const editProfile = () => {
const itemRef = collection(db, "flag");
const [newUpate,setNewUpdate]= useState(null);
const user = auth.currentUser
const .displayName=oldName
const handleUpdate = async() => {
    db()
    .collection('flag')
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

      <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="Display Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={newUpate ? newUpate.displayName : ''}
            onChangeText={(txt) => setNewUpdate({...newUpate, displayName: txt})}
            style={styles.textInput}
          />
    </View>
    <TouchableOpacity   style={styles.buton} onPress={handleUpdate} ><Text>update</Text></TouchableOpacity>
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
      textInput: {
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#333333',
      },
      buton:{
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        paddingHorizontal: 50
      }
})