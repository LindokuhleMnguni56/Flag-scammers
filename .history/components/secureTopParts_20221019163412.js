import { StyleSheet, SafeAreaView, Text, View,TouchableOpacity } from 'react-native';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import picture from '../assets/pic.png';
import { auth } from '../src/config/firebase';




export default function RedPart2() {

    const signOut = async()=>{
        auth
        .signOut()
        .then(() => console.log('User signed out!'));
    }

    const user = auth.currentUser;

    // console.log(user.displayName)
   

    return (
        <View style={styles.topContainer} >
            <View>
                <View style={styles.wrapper} >

                </View>
                <View style={styles.userContainerBorder}>

                    <Text style={styles.username}>{user.displayName}</Text>
                </View>

            </View>

            <View style={styles.menuDots}>
                <TouchableOpacity onPress={signOut}>
                    <FontAwesomeIcon style={styles.signout} icon={faSignOut} />
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    topContainer: {
        
        display: 'flex',

        backgroundColor: '#D2373C',
        height: '50px',
        width: '100%',
        // paddingTop: 15,


    },
    signout: {
        paddingLeft: '90%',
        color: 'white',
       
       
    },

    userContainerBorder: {

        paddingLeft: '50px'
    },

    username: {
        color: 'white',
    },

    wrapper: {
        marginLeft: '12px',
        height: 17,
        width: 17,
         top:'50%',
        backgroundColor: 'green',
        borderRadius: '50px'
    },

    menuDots:{
        bottom:'30%'
    }

});