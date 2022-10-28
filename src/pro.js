import { View, Text,StyleSheet, TextInput, TouchableOpacity, ImageBackground,Image, } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import picture from '../assets/pic.png';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {addDoc, collection,getDocs} from 'firebase/firestore';
import RedPart2 from '../components/secureTopParts';
import { updateProfile } from 'firebase/auth';
import { auth } from './config/firebase';
import RedPart from '../components/topPart';
export default function Pro(){



const user=auth.currentUser;
console.log(user.displayName)
 
  return (
    
    <View  style={styles.container}>
     {user != null ?(<RedPart2 />):(<RedPart />)} 


      <View style={styles.midContainer}>
      <View style={styles.wrapper} >

      {/* <FontAwesomeIcon icon={faUser} style={{backgroundColor:'black',width:170,height:170,borderRadius:50,color:'white', marginLeft:5}} />     */}
      <Image source={user.photoURL} style={{backgroundColor:'black',width:170,height:170,borderRadius:50,color:'white', marginLeft:5}} />
  
  
      </View>
      
      
      <View style={styles.profileDetails}>

          <View style={styles.userContainer}> 
            <Text style={styles.label}>username</Text>
              <View style={styles.flagText}>
                  <FontAwesomeIcon icon={faUser} style={styles.userIcon}/>
                  
                  <Text style={styles.text}>{user.displayName}</Text>
                  <TouchableOpacity>
              <FontAwesomeIcon icon={faEdit} style={styles.editIcon}/>
              </TouchableOpacity>
              </View>
              
          </View>

          <View style={styles.userContainer}> 
            <Text style={styles.label}>email</Text>
              <View style={styles.flagText}>
                  <FontAwesomeIcon icon={faEnvelope} style={styles.userIcon}/>
                  <Text style={styles.text}>{user.email}</Text>
              </View> 
          </View>

          <View style={styles.userContainer}> 
            <Text style={styles.label}>flags</Text>
              <View style={styles.flagText}>
                  <FontAwesomeIcon icon={faFlag} style={styles.userIcon}/>
                  <Text style={styles.text}>20</Text>
              </View> 
          </View>
          
          <View style={styles.userContainer}> 
            <Text style={styles.label}>comments</Text>
              <View style={styles.flagText}>
                  <FontAwesomeIcon icon={faComment} style={styles.userIcon}/>
                  <Text style={styles.text}>20</Text>
              </View> 
          </View>


       </View>
      </View>
      <View style={styles.bottomContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="white" fillOpacity="1" d="M0,32L120,53.3C240,75,380,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </View>     
    </View>
 
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white'
    },

    flagText:{
        alignContent: 'space-around',
        paddingLeft: 10,
        display:'flex', 
        flexDirection:'row',
        
    },

    text:{
        paddingTop:15,
        paddingLeft:10,
        fontSize:16,
    },

    label:{
        color: 'grey',
        padding:5
    },

    midContainer: {
        // flex: 12,
        height: '500px',
        width: '100%',
        marginTop: 20,
      },

    header:{
        color:'#EA4335',
        marginTop:'20%',
        marginLeft:"20%", 
        fontFamily:'coda', 
        fontWeight:'200', 
        fontSize:'25px', 
        lineHeight:35, 
    }, 
    userContainer:{ 
       width:'100%', 
        borderBottomWidth:0.5,
        alignSelf: 'flex-end',
        borderBottomColor:'lightgrey'

    },

    editIcon:{
        alignSelf: 'flex-end',
        alignSelf: 'center',
        paddingLeft: 230,
    },

    

    flagContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        borderBottomWidth:0.5,
        alignSelf: 'flex-end',
    },

    commentContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        borderBottomWidth:0.5,   
    },

    
    wrapper:{
        top: '1064',
        radius: '40px',
        height:170,
        width: 170,
        alignSelf: 'center',
        borderRadius:'330px',
        borderRadius: '140px',
    },
     
    profileDetails:{
        alignSelf: 'center',
        paddingTop:40
    },

    userIcon: {
        width: "12px",
        color:  '#D2373C',
        paddingTop:10
    },
    bottomContainer: {
        flex: 2.5,
        backgroundColor: '#000000',
        height: '20%',
        width: '100%',
        
      }
   
  });

