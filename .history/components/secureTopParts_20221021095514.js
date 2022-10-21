import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import picture from '../assets/pic.png';
import { auth } from '../src/config/firebase';
import { Link } from '@react-navigation/native';



export default function RedPart2() {
    
    return (
        <View style={styles.topContainer} >

            <View style={styles.userContainer}>
            <TouchableOpacity><FontAwesomeIcon icon={faChevronLeft} style={{width:20,height:20,color:'white'}} /></TouchableOpacity>
                <TouchableOpacity><FontAwesomeIcon icon={faUser} style={{backgroundColor:'black',width:20,height:20,borderRadius:50,color:'white', marginLeft:5}} /></TouchableOpacity>
                <Text style={styles.username}>{user.displayName}</Text>
            </View>

            <TouchableOpacity onPress={signOut}>
                    <FontAwesomeIcon style={styles.signout} icon={faSignOut} />
            </TouchableOpacity>
            

        </View>

    );
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection:'row',
        backgroundColor: '#D2373C',
        height: '50px',
        width: '100%',
        justifyContent:'space-between',
        paddingTop:15,
        paddingHorizontal:20

    },
    signout: {
        color: 'white',
    },

    userContainer: {
        flexDirection:'row'
      
    },

    username: {
        color: 'white',
        paddingLeft:5,
    },

   

    

});