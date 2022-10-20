import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import picture from '../assets/pic.png';
import { auth } from '../src/config/firebase';



export default function RedPart2() {
    return (
        <View style={styles.topContainer} >

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

    );
}

const styles = StyleSheet.create({
    topContainer: {
        
        display: 'flex',

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