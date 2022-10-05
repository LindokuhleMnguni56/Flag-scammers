import { StyleSheet,SafeAreaView, Text, View, } from 'react-native';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default function RedPart() {
    return (

        <View style={styles.topContainer} >
            <Text style={styles.usernameTXT}>lindo@gmail.com</Text><FontAwesomeIcon icon={faUser} style={styles.userIcon} />
        </View>
      
        
    );
  }
  
  const styles = StyleSheet.create({
    topContainer:{
      flex:1,
      display:'flex',
      flexDirection:'row',
      backgroundColor:'#D2373C',
      height:'50px',
      width:'100%',
      paddingTop:15,
      paddingRight:20,
      justifyContent:'flex-end',
    },
    usernameTXT:{
      textAlign:'right',
      paddingRight:20,
    },
    userIcon:{
      backgroundColor:'white',
      width:25,
      height:25,
      borderRadius:50,
    },
  
  });