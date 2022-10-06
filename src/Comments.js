import {StyleSheet,SafeAreaView, View,Text, TextInput } from 'react-native';
import RedPart from '../components/topPart';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';


export default function Comments(){
    return(
        <SafeAreaView style={styles.container}>
            <RedPart />
            <View style={styles.midContainer}>
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
                <View style={styles.textBox} >
                        <View style={styles.userIconBg}>
                            <FontAwesomeIcon icon={faUser} style={styles.userIcon} />
                        </View>
                        
                        <TextInput style={styles.addComment} placeholder='Add a comment....'></TextInput>
                </View>
                <View style={styles.commentsBox}>
                        <View style={styles.userIconBackground}>
                            <FontAwesomeIcon icon={faUser}/>
                        </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
    },
    midContainer:{
        flex:12,
        height:'500px',
        width:'100%',
        marginTop:20,
      },
    bottomContainer:{
        flex:2.5,
        backgroundColor:'#000000',
        height:'20%',
        width:'100%',
    },

    card:{
    display:'flex',
    flexDirection:'row',
    height:60,
    width:'92%',
    marginLeft:15,
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
        paddingLeft:10,
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
        marginLeft:10,
        paddingLeft:5,
        height:20,
        width:'100%',
        marginTop:15,
    },
    user
  });