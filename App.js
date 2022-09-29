
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer} >
          <Text style={styles.usernameTXT}>lindo@gmail.com</Text>
      </View>
        <View style={styles.midContainer}>
            <View style={styles.boxes}>
              <TextInput style={styles.selectBox}  placeholder='Select Type'></TextInput>
              <TextInput style={styles.inputBox} placeholder='Enter Address...'></TextInput>
              <View style={styles.searchIconBtn} ><FontAwesomeIcon icon={ faSearch } style={styles.searchIcon}/></View>
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
  topContainer:{
    backgroundColor:'#D2373C',
    height:'50px',
    width:'100%',
    paddingTop:15,
  },
  usernameTXT:{
    textAlign:'right',
    paddingRight:60,
  },
  midContainer:{
    height:'500px',
    width:'100%',
  },
  boxes:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'flex-end',
    
  },
  inputBox:{
    height:'25px',
    border:'1px solid black',
    width:'40%',
    marginTop:'25px',
    marginLeft:'5%',
    paddingLeft:'2%',
    backgroundColor:'#EDEDED'
  },
  selectBox:{
    height:'25px',
    border:'1px solid black',
    marginTop:'25px',
    width:'30%',
    marginLeft:'5%',
    paddingLeft:'2%',
    backgroundColor:'#EDEDED',
  },
  searchIconBtn:{
    backgroundColor:'#D2373C',
    width:'30px',
    height:'30px',
    paddingTop:'7px',
    paddingLeft:'8px',
    marginLeft:'20px',
    borderRadius:'20px',
    marginTop:'23px',
  },
  searchIcon:{
    color:'#EDEDED'
  },
  bottomContainer:{
    backgroundColor:'#000000',
    height:'20%',
    width:'100%',
  },
});
