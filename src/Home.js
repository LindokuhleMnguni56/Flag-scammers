
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import RedPart from '../components/topPart';


export default function HomeScreem() {
  return (
    <SafeAreaView style={styles.container}>
      
          <RedPart />
      
        <View style={styles.midContainer}>
            <View style={styles.boxes}>
              <View style={styles.selectView}>
                <Text style={styles.selectBox}  placeholder=''>Select Type</Text>
                <TouchableOpacity style={styles.drop}><FontAwesomeIcon icon={faCaretDown} style={styles.dropDown} /></TouchableOpacity>
              </View>
              
              <TextInput style={styles.inputBox} placeholder='Enter Address...'></TextInput>
              <View style={styles.searchIconBtn} ><FontAwesomeIcon icon={ faSearch } style={styles.searchIcon}/></View>
            </View>
            <View style={styles.cardsContainer}>
                  <View style={styles.card}>
                        <View style={styles.dateContainer}>
                          <Text style={styles.date1}>22</Text>
                          <Text style={styles.date2}>Aug</Text>
                          <Text style={styles.date3}>2022</Text>
                        </View>
                        <View style={styles.userContainer}>
                                <Text style={styles.username1}>lindo@gmail.com</Text>
                                <View style={styles.comments}>
                                  <Text style={styles.username2}>30</Text><FontAwesomeIcon icon={ faFlag } style={styles.flags}/>
                                  <Text  style={styles.username2}>30</Text><FontAwesomeIcon icon={ faComment } style={styles.commentIcon}/>
                                </View>
                        </View>
                        <TouchableOpacity style={styles.upvoteBtn}>
                                <Text style={styles.upvoteTXT}>UPVOTE</Text>        
                        </TouchableOpacity>
                  </View>
                  <View style={styles.card}>
                        <View style={styles.dateContainer}>
                          <Text style={styles.date1}>4</Text>
                          <Text style={styles.date2}>Jan</Text>
                          <Text style={styles.date3}>2022</Text>
                        </View>
                        <View style={styles.userContainer}>
                                <Text style={styles.username1}>nkadimeng@gmail.com</Text>
                                <View style={styles.comments}>
                                  <Text style={styles.username2}>30</Text><FontAwesomeIcon icon={ faFlag } style={styles.flags}/>
                                  <Text  style={styles.username2}>30</Text><FontAwesomeIcon icon={ faComment } style={styles.commentIcon}/>
                                </View>
                        </View>
                        <TouchableOpacity style={styles.upvoteBtn}>
                               <Text style={styles.upvoteTXT}>UPVOTE</Text>        
                        </TouchableOpacity>
                  </View>
                  <View style={styles.card}>
                  <View style={styles.dateContainer}>
                          <Text style={styles.date1}>15</Text>
                          <Text style={styles.date2}>May</Text>
                          <Text style={styles.date3}>2021</Text>
                        </View>
                        <View style={styles.userContainer}>
                                <Text style={styles.username1}>tebzaham@gmail.com</Text>
                                <View style={styles.comments}>
                                  <Text style={styles.username2}>1k</Text><FontAwesomeIcon icon={ faFlag } style={styles.flags}/>
                                  <Text  style={styles.username2}>100</Text><FontAwesomeIcon icon={ faComment } style={styles.commentIcon}/>
                                </View>
                        </View>
                        <TouchableOpacity style={styles.upvoteBtn}>
                                <Text style={styles.upvoteTXT}>UPVOTE</Text>        
                        </TouchableOpacity>
                  </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.button}>+</Text>
            </TouchableOpacity>
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
  },
  boxes:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  inputBox:{
    height:'25px',
    border:'1px solid black',
    width:'45%',
    marginTop:'25px',
    paddingLeft:'2%',
    backgroundColor:'#EDEDED',
    borderRadius:4,
  },
  selectView:{
    display:'flex',
    flexDirection:'row',
    width:'30%',
    height:25,
    marginTop:25,
    border:'1px solid black',
    borderRadius:4,
  },
  dropDown:{
    paddingTop:3,
    paddingRight:5,
  },
  selectBox:{
    paddingLeft:'2%',
    marginLeft:5,
    width:'80%',
  },
  searchIconBtn:{
    backgroundColor:'#D2373C',
    width:'30px',
    height:'30px',
    paddingTop:'7px',
    paddingLeft:'8px',
    borderRadius:'20px',
    marginTop:'23px',
  },
  searchIcon:{
    color:'#EDEDED'
  },
  dateContainer:{
    flex:1,
  },
  userContainer:{
    flex:3,
    marginRight:40,
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
    height:80,
    width:'92%',
    marginLeft:15,
    marginTop:20,
    boxShadow:'#ababab 0px 6px 9px -3px;',
  },
  buttonContainer:{
    backgroundColor:'#D2373C',
    width:'50px',
    height:'50px',
    paddingLeft:16,
    borderRadius:50,
    marginTop:80,
    marginRight:15,
    alignSelf:'flex-end',
  },
  button:{
    color:'#EDEDED',
    fontSize:'1.8em',
  },
  date1:{
    paddingTop:15,
    paddingLeft:25,
    fontSize:12,
    color:'red',
  },
  date2:{
    paddingLeft:20,
    fontSize:12,
    color:'#D2373C',
    fontWeight:'bolder',
  },
  date3:{
    paddingLeft:18,
    fontSize:12,
    color:'#D2373C',
  },
  username1:{
    paddingLeft:50,
    paddingTop:15,
    fontSize:12,
  },
  username2:{
    paddingLeft:50,
    paddingTop:10,
    fontSize:10,
  },
  comments:{
    display:'flex',
    flexDirection:'row',
  },
  commentIcon:{
    paddingTop:12,
    position:'absolute',
    paddingLeft:130,
  },
  flags:{
    paddingTop:15,
    paddingLeft:65,
    color:'#D2373C',
    position:'absolute',
  },
  upvoteBtn:{
    flex:1,
    border:'1px solid #6200EE',
    height:22,
    width:40,
    marginTop:30,
    marginRight:10,
    borderRadius:4,
  },
  upvoteTXT:{
    paddingLeft:8,
    paddingTop:2,
    fontSize:11,
    color:'#6200EE',
    fontWeight:'bold',
  },
});