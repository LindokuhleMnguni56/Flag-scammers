import {StyleSheet,SafeAreaView, View,Text } from 'react-native';
import RedPart from '../components/topPart';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';


export default function Comments(){
    return(
        <SafeAreaView style={styles.container}>
            <RedPart />
            <View style={styles.midContainer}>
                <View style={styles.card}>
                    <View style={styles.dateContainerBorder}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.day}>15</Text>
                            <Text style={styles.month}>May</Text>
                            <Text style={styles.year}>2021</Text>
                        </View>
                    </View>
                    <View style={styles.userContainer}>
                            <Text style={styles.username1}>tebzaham@gmail.com</Text>
                            <View style={styles.comments}>
                                    <FontAwesomeIcon icon={ faFlag } style={styles.flags}/><Text style={styles.username2}>1k</Text>
                            </View>
                    </View>
                </View>
                <View style={styles.textBox} >
                        <FontAwesomeIcon icon={faCircleUser} />
                        <Text>gfdfdg</Text>
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
    dateContainerBorder:{
        width:80,
    },
    day:{
        paddingTop:10,
        paddingLeft:25,
        fontSize:12,
        color:'#D2373C',
      },
      month:{
        paddingLeft:20,
        fontSize:12,
        color:'#D2373C',
        fontWeight:'bolder',
      },
      year:{
        paddingLeft:18,
        fontSize:12,
        color:'#D2373C',
      },
      userContainer:{
        flex:3,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:25,
      },
      comments:{
        display:'flex',
        flexDirection:'row',
      },
      flags:{
        color:'#D2373C',
      },
      textBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
      },
  });