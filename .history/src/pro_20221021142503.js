import { View, Text,StyleSheet, TextInput, TouchableOpacity, ImageBackground,Image } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import picture from '../assets/pic.png';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { updateProfile } from 'firebase/auth';
import RedPart2 from '../components/secureTopParts';

export default function Pro(){
    //const Image = require('./assets/pic.png');

  return (
    
    <View  style={styles.container}>
      <RedPart2> 
         <Text style={styles.username1}>{pr}lindokuhle@gmail.com</Text>
       
     </RedPart2>  
    {/* <View style={styles.wrapper} >
    <Image source={picture}  />
    </View> */}


      <View style={styles.midContainer}>
      <View style={styles.wrapper} >
      {/* <Icon color='red' sname='user'  type='font-awesome' size={12} /> */}
  
  
      </View>
      <Text style={styles.container}>

      </Text>
      
      <View style={styles.profileDetails}>
          <View style={styles.usernameContainer}>
              <br/>
              <FontAwesomeIcon icon={faUser} style={styles.userIcon}/>
              <View style={styles.flagText}>
                  <Text style={styles.label}>username</Text>
                  <Text style={styles.text}>Sticky</Text>
              </View>
              <FontAwesomeIcon icon={faEdit} style={styles.editIcon}/>    
          </View>

           <View style={styles.emailContainer}>
              <FontAwesomeIcon icon={faEnvelope} style={styles.userIcon}/>
              <View style={styles.flagText}>
                  <Text style={styles.label}>email</Text>
                  <Text style={styles.text}>sticky@gmail.com</Text>
              </View>
          </View>

          <View style={styles.flagContainer}>
              <FontAwesomeIcon icon={faFlag} style={styles.userIcon}/>
              <View style={styles.flagText}>
                  <Text style={styles.label}>flags</Text>
                  <Text style={styles.text}>20</Text>
              </View>
          </View>

          <View style={styles.commentContainer}>
          <FontAwesomeIcon icon={faComment} style={styles.userIcon}/>
              <View style={styles.flagText}>
                  <Text style={styles.label}>comments</Text>
                  <Text style={styles.text}>100</Text>
              </View>
          </View>
       </View>
      </View>
      <View style={styles.bottomContainer}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="white" fillOpacity="1" d="M0,32L120,53.3C240,75,380,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
      </View>     
    </View>
 
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },

    flagText:{
        alignContent: 'space-around',
        paddingLeft: 10,
    },

    text:{

    },

    label:{
        color: 'grey',
    },

    midContainer: {
        flex: 12,
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
    usernameContainer:{ 
       width:'100%', 
        display:'flex', 
        flexDirection:'row',
        borderBottomWidth:0.5,
        //justifyContent:'space-between'
        alignSelf: 'flex-end',
    },

    editIcon:{
        alignSelf: 'flex-end',
        alignSelf: 'center',
        paddingLeft: 230,
    },

    emailContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        borderBottomWidth:0.5,
        alignSelf: 'flex-end',
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
        backgroundColor: 'green',
        borderRadius: '140px'
        
    },
     
    profileDetails:{
        paddingBottom: 121,
        alignSelf: 'center'
    },

    userIcon: {
        width: "20px",
        height: "50px",
        color:  '#D2373C',
    },
    bottomContainer: {
        flex: 2.5,
        backgroundColor: '#000000',
        height: '20%',
        width: '100%',
        
      }
   
  });

