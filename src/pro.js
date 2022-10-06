import { View, Text,StyleSheet, TextInput, TouchableOpacity, ImageBackground,Image } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import picture from '../pics/pic.png';

import RedPart from '../components/secureTopParts';


export default function Pro (){


  return (
    <View  style={styles.container}>
        
      <RedPart />
      <View style={styles.midContainer}>
      <Text style={styles.header}>pp</Text>
      
      <View style={styles.profileDetails}>
          <View style={styles.usernameContainer}>
              <FontAwesomeIcon icon={faUser} style={styles.userIcon}/>
              <View style={styles.usernameTexts}>
                  <Text style={styles.usernameLabel}>username</Text>
                  <Text style={styles.username}>Sticky</Text>
              </View>
              <FontAwesomeIcon icon={faEdit} style={styles.editIcon}/>    
          </View>

           <View style={styles.emailContainer}>
              <FontAwesomeIcon icon={faMailBulk} style={styles.userIcon}/>
              <View style={styles.emailText}>
                  <Text style={styles.emailLabel}>email</Text>
                  <Text style={styles.email}>sticky@gmail.com</Text>
              </View>
          </View>

          <View style={styles.flagContainer}>
              <FontAwesomeIcon icon={faFlag} style={styles.userIcon}/>
              <View style={styles.flagText}>
                  <Text style={styles.flagNum}>flags</Text>
                  <Text style={styles.email}>20</Text>
              </View>
          </View>

          <View style={styles.commentContainer}>
          <FontAwesomeIcon icon={faComment} style={styles.userIcon}/>
              <View style={styles.flagText}>
                  <Text style={styles.flagNum}>comments</Text>
                  <Text style={styles.email}>100</Text>
              </View>
          </View>
      </View>
      </View>

     
    </View>
 
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
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
        borderBottomWidth:1,
        //justifyContent:'space-between'
        alignSelf: 'flex-end',
    },
    editIcon:{
        alignSelf: 'flex-end',
        alignSelf: 'center',
    },

    emailContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        borderBottomWidth:1,
        alignSelf: 'flex-end',
    },

    flagContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        borderBottomWidth:1,
        alignSelf: 'flex-end',
    },

    commentContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        borderBottomWidth:1,
        alignSelf: 'flex-end',
    },
    
  });

