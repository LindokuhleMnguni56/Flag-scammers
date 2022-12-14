
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity,ImageBackground,Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import RedPart from '../components/topPart';
import image1 from '../assets/4.png'
import tipsImg from '../assets/tipsbg2.png'
import { auth } from './config/firebase';
import RedPart2 from '../components/secureTopParts';



export default function NotFound({route,navigation}) {
  const { flagAddress } = route.params;

  let user = auth.currentUser;
  return (
    <SafeAreaView style={styles.container}>
      {user != null ? (<RedPart2 />) : (<RedPart />)}
      
      <View style={styles.midContainer}>
              <View style={styles.cardContainer}>
                  <View style={styles.card}>
                          <View style={styles.userContainer}>
                                <View style={styles.userContainerBorder}>
                                        <Text style={styles.username}>{flagAddress}</Text>
                                </View>
                                
                          </View>
                          <View style={styles.likes}>
                                  <FontAwesomeIcon icon={ faFlag } style={styles.flags}/>
                          </View>
                          
                  </View>
            </View>
            <Text style={styles.notFoundText}>Not Found</Text>
            <View style={styles.bgImageContainer}>
                    <ImageBackground source={image1} style={styles.bgImage} />
            </View>
      </View>
        
      <View style={styles.tipsBgImage}>
      <View style={styles.tipsTextContainer}>
                <Text style={styles.tipsText}>Other tips and tricks</Text>
        </View>
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
  cardContainer:{
    width:'90%',
  },
  card:{
    display:'flex',
    flexDirection:'row',
    width:'95%',
    marginLeft:30,
    marginTop:20,
    boxShadow:'#ababab 0px 6px 9px -3px;',
  },
  userContainer:{
    flex:3,
    marginRight:100,
},
userContainerBorder:{
    paddingVertical:10,
},

username:{
  width:250,
  paddingLeft:20,
},
flags:{
    paddingTop:15,
    color:'green',
    paddingRight:20,
},

  bgImageContainer:{
    paddingTop:10,
    alignSelf:'center',
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
    backgroundColor:'#000000',
    height:'17%',
    width:'100%',
    
  },
  notFoundText:{
    alignSelf:'center',
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
    paddingVertical:10,
    justifyContent:'center',
    width:'100%',
    
  },
  tipsText:{
    fontSize:18,
    fontWeight:'bolder',
    fontFamily:'sans',
  },
  tipsAndTricksContainer:{
    width:'75%',
    height:100,
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