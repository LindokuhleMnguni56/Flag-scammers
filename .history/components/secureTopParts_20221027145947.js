import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity,Image, Link} from 'react-native';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import picture from '../assets/pic.png';
import { auth } from '../src/config/firebase';
import { useNavigation } from '@react-navigation/native';
import img from '../assets/pic.png'
import HomeScreen from '../src/Home';



export default function RedPart2() {
    const navigation = useNavigation();
    
    const signOut = async()=>{
        auth
        .signOut()
        .then(() => console.log('User signed out!'));
        navigation.push('Home')
    }

    const user = auth.currentUser;
const imageSrc=(user.photoURL)
    console.log(user.displayName)

     return (
        <View style={styles.topContainer} >

            <View style={styles.userContainer}>
            <TouchableOpacity 
                onPress={() => {navigation.goBack();}}
                >
                    <FontAwesomeIcon icon={faChevronLeft} style={{width:20,height:20,color:'white'}} />
            </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => {navigation.navigate('Pro');}}><FontAwesomeIcon icon={faUser} style={{backgroundColor:'black',width:20,height:20,borderRadius:50,color:'white', marginLeft:5}} /></TouchableOpacity> */}
                <TouchableOpacity onPress={() => {navigation.navigate('Pro');}}>
                    {/* <img src={imageSrc} style={{backgroundColor:'black',width:20,height:20,borderRadius:50,color:'white', marginLeft:5}} /> */}
                    <Image
                        style={{backgroundColor:'black',width:20,height:20,borderRadius:50,color:'white', marginLeft:5}}
                        source={imageSrc}
                    />
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Pro');}}><Text style={styles.username}>{user.displayName}</Text></TouchableOpacity>
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