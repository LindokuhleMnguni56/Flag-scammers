import React, { useEffect, useContext, useState } from 'react';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';


 const EditProfileScreen = () => {

    const user = auth.currentUser

    const [userData, setUserData] = useState(null);

    const handleUpdate = async () => {
        firestore()
            .collection('users')
            .doc(user.displayName)
            .update({
                fname: userData.dname,
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
                    placeholder="Display"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    value={userData ? userData.fname : ''}
                    onChangeText={(txt) => setUserData({ ...userData, fname: txt })}
                    style={styles.textInput}
                />
            </View>

        </View>
    )
}
export default EditProfileScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

})