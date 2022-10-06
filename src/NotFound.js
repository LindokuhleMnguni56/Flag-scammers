
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity,ImageBackground,Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import RedPart from '../components/topPart';
import image1 from '../assets/cross3.png'


export default function NotFound() {
  return (
    <SafeAreaView style={styles.container}>

      <RedPart />
      <View style={styles.midContainer}>
            <View style={styles.card}>
                    <View style={styles.userContainer}>
                          <View style={styles.userContainerBorder}>
                                  <Text style={styles.username}>tebzahamham@gmail.com</Text>
                          </View>
                          
                    </View>
                    <View style={styles.likes}>
                            <FontAwesomeIcon icon={ faFlag } style={styles.flags}/>
                    </View>
                    
            </View>
            <Text style={styles.notFoundText}>Not Found</Text>
            <View style={styles.bgImageContainer}>
                    <ImageBackground source={image1} style={styles.bgImage} />
            </View>
            <Text style={styles.tips}>Other tips and tricks</Text>
      </View>
      <View style={styles.bottomContainer}>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  midContainer:{
    flex:12,
  },
  card:{
    display:'flex',
    flexDirection:'row',
    height:60,
    width:'90%',
    marginLeft:20,
    marginTop:20,
    boxShadow:'#ababab 0px 6px 9px -3px;',
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

username:{
  width:250,
  paddingLeft:20,
},
flags:{
    paddingTop:25,
    color:'green',
    paddingRight:20,
},
numberFlags:{
  marginLeft:5,
  fontSize:12,
},

  bgImageContainer:{
    marginTop:40,
    marginLeft:150,
  },
  bgImage:{
    height:100,
    width:100,
  },
  bottomContainer:{
    flex:2.5,
    backgroundColor:'black',
    height:'50px',
    width:'100%',
  },
  notFoundText:{
    marginLeft:40,
    textAlign:'center',
    marginTop:20,
    width:'80%',
    fontSize:30,
    fontFamily:'sans',
    color:'darkgrey',
  },
  tips:{
    textAlign:'center',
    marginTop:10,
    backgroundColor:'#fff9f9',
    height:30,
    paddingTop:5,
    fontSize:18,
    fontWeight:'bolder',
  },
});