import { StyleSheet,SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
// import { faEllipsisV} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Link } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';



export default function RedPart() {
  const navigation = useNavigation();
  return (

        <View style={styles.topContainer} >
            <View style={styles.btnBackground}>
                <TouchableOpacity 
                    onPress={() => {navigation.goBack();}}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} style={{width:20,height:20,color:'white'}} />
                </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.usernameTXT1}><Link to={'/Login'}>Login</Link></Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.usernameTXT}><Link to={'/Register'}>Register</Link></Text>
                  </TouchableOpacity>
            </View>      
        </View>     
        
    );
  }
  
  const styles = StyleSheet.create({
    topContainer:{
      display:'flex',
      flexDirection:'row',
      backgroundColor:'#D2373C',
      height:'50px',
      width:'100%',
      paddingTop:15,
      paddingRight:20,
      justifyContent:'flex-end',
    },
    btnBackground:{
      flexDirection:'row',
      width:'90%',
      marginRight:20,
      
    },
    usernameTXT1:{
      paddingRight:15,
      marginRight:5,
      borderRightWidth:'2px',
      borderRightColor:'white',
      height:20,
      color:'white',
      paddingLeft:20
    },
    usernameTXT:{
      textAlign:'right',
      paddingLeft:10,
      color:'white',
    },
  
  
  });