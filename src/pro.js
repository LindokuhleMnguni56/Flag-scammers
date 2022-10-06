import { View, Text,StyleSheet, TextInput, TouchableOpacity, ImageBackground,Image } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faMailReply } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';


export default function Pro (){
 



  return (
    <View  style={styles.container}>
        
      <Text style={styles.header}>Welcome Back</Text>
      
        <View style={styles.profileDetails}>
            <View style={styles.usernameContainer}>
                <FontAwesomeIcon icon={faUser} style={styles.userIcon}/>
                <View style={styles.usernameTexts}>
                    <Text style={styles.usernameLabel}>username</Text>
                    <Text style={styles.username}>Sticky</Text>
                </View>
                <FontAwesomeIcon icon={faEdit} style={styles.editIcon}/>     
            </View>

            <View styl={styles.eamilContainer}>
                
                <FontAwesomeIcon icon={faMailBulk} style={styles.userIcon}/>
                
            </View>

            <View>flags</View>

            <View>comments</View>
        </View>



    </View>
 
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
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
        justifyContent:'space-between'
    },

    
  });

