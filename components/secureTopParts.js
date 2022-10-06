import { StyleSheet,SafeAreaView, Text, View, } from 'react-native';
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { TouchableOpacity } from 'react-native-web';


export default function RedPart() {
    return (

        <View style={styles.topContainer} >
            <View style={styles.userContainerBorder}>           
                    <Text style={styles.username}>tebzahamham@gmail.com</Text>
            </View>
            <View style={styles.menuDots}>
            <TouchableOpacity >
                <FontAwesomeIcon style={styles.dots} icon={faEllipsisV} />
            </TouchableOpacity>
            </View>
        
                  
        </View>     
        
    );
  }
  
  const styles = StyleSheet.create({
    topContainer:{
      flex:1,
      display:'flex',

      backgroundColor:'#D2373C',
      height:'50px',
      width:'100%',
      paddingTop:15,
      
  
    },
    dots:{
       
        paddingLeft:'90%',
         color: 'white',
  
    },
  
    userContainerBorder:{
        top:'25%',
        paddingLeft:'50px'
    },

    username:{
        color: 'white',
    }
  });