import {StyleSheet,SafeAreaView, View,Text, TextInput, ScrollView,Image } from 'react-native';
import RedPart from '../components/topPart';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import profileImg from '../assets/pic.png'
import { Button, TouchableOpacity } from 'react-native-web';
import { Icon } from 'react-native-vector-icons/Icon';

export default function Comments(){
    return(
        <SafeAreaView style={styles.container}>
            <RedPart />
            <View style={styles.card}>
                    <View style={styles.dateContainer}>
                        <View style={styles.dateContainerBorder}>
                            <Text style={styles.day}>15</Text>
                            <Text style={styles.month}>May</Text>
                            <Text style={styles.year}>2021</Text>
                        </View>
                    </View>
                    <View style={styles.userContainer}>
                          <View style={styles.userContainerBorder}>
                                  <Text style={styles.username}>tebzahamham@gmail.com</Text>
                          </View>
                          <View style={styles.likes}>
                                          <FontAwesomeIcon icon={ faFlag } style={styles.flags}/><Text style={styles.numberFlags}>1k</Text>
                          </View>
                    </View>
                    
                </View>
            <ScrollView style={styles.midContainer} showsVerticalScrollIndicator={false}>
                
                <View style={styles.textBox} >
                        <TouchableOpacity style={styles.userIconBg}>
                            <Image source={profileImg} style={{height:30, borderRadius:50,}} />
                        </TouchableOpacity>
                        
                        <TextInput style={styles.addComment} placeholder='Add a comment....'></TextInput>
                        <TouchableOpacity>
                            <Icon
                            name='paper-plane'
                            {/* <Text style={styles.button}>add</Text> */}
                        </TouchableOpacity>
                </View>
                <View style={styles.commentsBox}>
                        <TouchableOpacity style={styles.userIconBackground}>
                            <Image source={profileImg} style={{height:30, borderRadius:50,}} />
                        </TouchableOpacity>
                        <Text style={styles.userComments}>
                                I got scammed twice with this email the scammer asked for my ID number and proof of residence
                                and also R250 fee I only realized after I paid that I just gave away 
                                my coonfidential information and even paid on top of that.
                                Thank you for this app I wish I knew it earlier.
                        </Text>
                </View>
                
                
            </ScrollView>
            <View style={styles.bottomContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="white" fillOpacity="1" d="M0,32L120,53.3C240,75,380,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      backgroundColor:'white',
    },
    midContainer:{
        flex:12,
        height:'500px',
        width:'100%',
        marginTop:20,
      },
    bottomContainer:{
        backgroundColor:'#000000',
        height:'17%',
        width:'100%',
    },

    card:{
    display:'flex',
    flexDirection:'row',
    height:60,
    width:'92%',
    marginTop:20,
    boxShadow:'#ababab 0px 6px 9px -3px;',
    },
    dateContainer:{
        flex:1,
        width:80,
    },
    dateContainerBorder:{
      height:40,
      marginTop:15,
      borderRightWidth:1,
      borderRightColor:'black',
      width:50,
    },
    day:{
        paddingLeft:20,
        fontSize:10,
        color:'#D2373C',
    },
    month:{
        paddingLeft:15,
        fontSize:10,
        color:'#D2373C',
        fontWeight:'bolder',
    },
    year:{
        paddingLeft:15,
        fontSize:10,
        color:'#D2373C',
    },
    userContainer:{
        flex:3,
        display:'flex',
        flexDirection:'row',
        marginRight:100,
    },
    userContainerBorder:{
        height:40,
        marginTop:13,
        paddingTop:10,
    },
    likes:{
        fle:1,
        display:'flex',
        flexDirection:'row',
        height:40,
        marginLeft:45,
        marginTop:25,
    },
    username:{
      width:180,
    },
    flags:{
        color:'#D2373C',
    },
    numberFlags:{
      marginLeft:5,
      fontSize:12,
    },
    textBox:{
        display:'flex',
        flexDirection:'row',
        marginLeft:15,
        marginTop:20,
        borderBottomWidth:2,
        borderBottomColor:'#bd5d5d',
        height:40,
        width:'92%',
        
    },
    userIconBg:{
        backgroundColor:'grey',
        width:30,
        height:30,
        borderRadius:50,
        marginTop:5,
    },
    userIcon:{
        paddingTop:6,
        paddingLeft:6,
    },
    addComment:{
        marginLeft:15,
        paddingLeft:5,
        height:25,
        width:'100%',
        marginTop:10,
    },
    commentsBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:20,
    },
    userIconBackground:{
        backgroundColor:'grey',
        width:30,
        height:30,
        borderRadius:50,
        marginTop:5,
        
    },
    commentsUserIcon:{
        paddingTop:6,
        paddingLeft:6,
    },
    userComments:{
        fontSize:12,
        width:'80%',
        backgroundColor:'rgb(255,240,242)',
        padding:15,
    },
    
  });