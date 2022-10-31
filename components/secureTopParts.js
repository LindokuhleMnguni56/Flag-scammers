import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity,Image, Link, Modal} from 'react-native';
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
import ConfirmationPopup from "../components/modal";
import modalImage from "../assets/cross3.png";
import React from 'react';



export default function RedPart2() {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);
    
    const signOut = async()=>{
        auth
        .signOut()
        .then(() => console.log('User signed out!'));
        navigation.push('Home')
        setVisible(false);
        
    }
    const confirmSignOut = async()=>{
        setVisible(true);
    }

    const user = auth.currentUser;
    const imageSrc=(user.photoURL)
    console.log(user.displayName)

    const close = () => {
        setVisible(false);
        
      };

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
            <View>
          <ConfirmationPopup visible={visible}>
            <Image
              source={modalImage}
              style={{ width: 50, height: 50, alignSelf: "center" }}
            />
            <Text
              style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
            >
              You are about to be signed out, Do you want to continue?
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{backgroundColor: "blue",width:60,height:20,borderRadius:20,textAlign:'center'}} onPress={() => close()}>
                <Text style={{color:'white'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: "red",width:60,height:20,borderRadius:20,textAlign:'center'}} onPress={() => signOut()}>
                <Text style={{color:'white'}}>Logout</Text>
                </TouchableOpacity>
            </View>    
          </ConfirmationPopup>
        </View>

            <TouchableOpacity onPress={confirmSignOut}>
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