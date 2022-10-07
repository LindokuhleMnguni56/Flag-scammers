
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity,ImageBackground,Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import RedPart from '../components/topPart';
import image1 from '../assets/4.png'
import tipsImg from '../assets/tipsbg2.png'


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
            <View style={styles.tipsTextContainer}>
                <Text style={styles.tipsText}>Other tips and tricks</Text>
            </View>
            
            <View style={styles.tipsBgImage}>
                <ImageBackground source={tipsImg} style={styles.tipsImage}>
                  <View style={styles.tipsAndTricksContainer}>
                        <Text style={styles.firstTip}>Do not share personal or financial information with a contact you did not expect.</Text>
                        <Text style={styles.secondTip}>Do not share personal or financial information with a contact you did not expect.</Text>
                        <Text style={styles.thirdTip}>Do your research on the company, the employer and the email-address</Text>
                        <Text style={styles.fourthTip}>Search for jobs through a reliable platform.</Text>
                        <Text style={styles.fifthTip}>If its a scam, Please report back to our platform</Text>
                  </View>
 
                </ImageBackground>
            </View>
            
      </View>
      <View style={styles.bottomContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="white" fillOpacity="1" d="M0,32L120,53.3C240,75,380,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white'
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

  bgImageContainer:{
    marginTop:10,
    marginLeft:140,
    width:120,
    borderRadius:50,
    alignItems:'center',
  },
  bgImage:{
    height:100,
    width:100,
  },
  tipsBgImage:{
    width:'100%',
    
  },
  tipsImage:{
    height:220,
    width:'100%',
  },
  bottomContainer:{
    flex:2.5,
    backgroundColor:'#000000',
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
  tipsTextContainer:{
    textAlign:'center',
    backgroundColor:'#F8E9E9',
    height:40,
    
  },
  tipsText:{
    paddingTop:10,
    fontSize:18,
    fontWeight:'bolder',
    fontFamily:'sans',
  },
  tipsAndTricksContainer:{
    width:'75%',
    height:200,
    marginLeft:50,
    paddingLeft:10,
    
  },
  firstTip:{
    marginTop:10,
    paddingTop:4,
    fontSize:12,
  },
  secondTip:{
    marginTop:10,
    fontSize:12,
  },
  thirdTip:{
    marginTop:10,
    fontSize:12,
  },
  fourthTip:{
    marginTop:10,
    fontSize:12,
  },
  fifthTip:{
    marginTop:10,
    color:'#D2373C',
    width:180,
    textAlign:'center',
    marginLeft:50,
  },
  
});