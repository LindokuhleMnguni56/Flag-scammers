import { StyleSheet, SafeAreaView, Text, View, } from 'react-native';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Link } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-web';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function RedPart() {
  return (

    <View style={styles.topContainer} >
      <View style={styles.btnBackground}>
        <TouchableOpacity 
       
        >  
          <Text style={styles.usernameTXT1}><Link to={'/Login'}>Login</Link></Text>
        </TouchableOpacity>
        <TouchableOpacity>
      
          <Text style={styles.usernameTXT}><Link to={'/Register'}>Register</Link></Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity >
        <FontAwesomeIcon icon={faEllipsisV} style={styles.menuDots} />
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#D2373C',
    height: '50px',
    width: '100%',
    paddingTop: 15,
    paddingRight: 20,
    justifyContent: 'flex-end',
  },
  btnBackground: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '205px',

  },
  usernameTXT1: {
    paddingRight: 15,
    marginRight: 5,
    borderRightWidth: '2px',
    borderRightColor: 'white',
    height: 20,
    color: 'white',
  },
  usernameTXT: {
    textAlign: 'right',
    paddingLeft: 10,
    color: 'white',
  },
  menuDots: {
    color: 'white',
  },

});