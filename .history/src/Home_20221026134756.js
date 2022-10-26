
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Touchable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import RedPart from '../components/topPart';
import RedPart2 from '../components/secureTopParts';
import { Picker } from 'react-native-web';
import ClipLoader from "react-spinners/ClipLoader";
import SyncLoader from "react-spinners/SyncLoader";





// import { ScrollView } from 'react-native-web';
import { db } from './config/firebase';
import { auth } from './config/firebase';
import {addDoc, collection,doc, deleteDoc,getDocs,query,where,getDoc,onSnapshot, documentId} from 'firebase/firestore';
import Comments from './Comments';
import { async } from '@firebase/util';
import React from 'react';





export default function HomeScreen({navigation}){
  const [likes]
  const [flags,setFlags]= React.useState([]);
  const listFlag = []
    const[users,setUsers]= React.useState('');
    const [address,setAddress] =React.useState('')
  
    const [selectedAddress, setSelectedAddress] = React.useState('');
    const [addresses] = React.useState([
      'Email Address',
      'Physical Address'
  ]
  );
  
    const flagRef =collection(db,"flag");
    const commentRef =collection(db,"comments");
  
    var user= auth.currentUser;
  console.log(user);
  
  
  
  
    const addButton = async()=>{
    if (user == null) {
  
      alert('not logged in')
      navigation.push('Login');
      }else{
      alert('logged in')
      navigation.push('AddScammer');
  
    }
  }
  
  
  
  
    const getItems = async()=>{
        
      console.log(flagRef);
      // myComment = 
      let data = await getDocs(flagRef);
      
    
  
      const q = query(collection(db, "flag"));
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
         let commentCount = doc.data().comments.length
        //  let commentCount = 2
         console.log(commentCount);
        listFlag.push({id:doc.id , address: doc.data().address,comment:doc.data().comments, date:doc.data().date, commentCount:commentCount })
    });
  
  
       setFlags(listFlag)
  
  
        console.log(listFlag);
        // getComments()
      }
  
  
  
  
      const search = async() =>{
  
    //   flags.map(flag=>((
  
    //     // console.log(address)
  
    //     address === flag.address ?(
    //       // navigation.push('NotFound')
    //       console.log(flag.address)
    //       // navigation.push('Comments')
    //     ) :(
    //       // navigation.push('Comments')
    //       console.log(flag.address,"notfound")
    //     )
  
    //     // console.log(address)
    //     // address == flag.address ?(
    //     //   navigation.push('Comments',{flag:flag})
    //     // ):(
    //     //   navigation.push('Home')
    //     // )
  
  
    // )))
    console.log(flags.length);
  
        for (var i=0; i < getItems().length; i++){
  
            if(address == flags.address){
        navigation.push('Comments')
        console.log('found')
            }else{
        navigation.push('NotFound')
      }
    }
  
  }
  
  
      React.useEffect(()=>{
    console.log("some")
    getItems();
  
  
  }, [])
  
  


return (
  <SafeAreaView style={styles.container}>
    {user != null ?(<RedPart2 />):(<RedPart />)}
    
    <View style={styles.boxes}>

    <View style={styles.selectView}>
                        
            <Picker
                  style={[styles.dropdownPick, { marginTop: '25px', marginVertical: 10, }]}
                  selectedValue={selectedAddress}
                  onValueChange={(itemVal) => {
                  setSelectedAddress(itemVal);
                  console.log({ selectedAddress });

                  }}
                  >
                  {
                    addresses.map((a) => (
                        <Picker.Item label={a} value={a} key={a} />
                        ))
                  }
            </Picker>
    </View>

      <TextInput style={styles.inputBox} placeholder='Enter Address...'></TextInput>
      <TouchableOpacity><View style={styles.searchIconBtn} ><FontAwesomeIcon icon={faSearch} style={styles.searchIcon} /></View></TouchableOpacity>
    </View>
    <View>
    {/* <SyncLoader
        color={"green"}
        loading={loading}
        // cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
    </View>
  
    
    <ScrollView style={styles.midContainer}>
    
      {
               flags.map(flag=>((
                <View style={styles.cardsContainer} key={flag.id}>
                  <View style={styles.card}>
                        <View style={styles.dateContainerBorder}>
                          <View style={styles.dateContainer}>
                            <Text style={styles.year}>2022<Text>-</Text></Text>
                            <Text style={styles.month}>10<Text>-</Text></Text>
                            <Text style={styles.day}>22</Text>
                            
                          </View>

                        </View>
                        <View style={styles.userContainerRightBorder}>
                          <View style={styles.userContainer}>
                          <TouchableOpacity onPress={() => 
                                navigation.navigate("Comments",{flagComments : flag.comment,flagAddress:flag.address})
                                
                                }>
                            <Text style={styles.username1}>{flag.address}</Text>
                            </TouchableOpacity>
                            <View style={styles.comments}>
                              <Text style={styles.username2}>100k</Text><FontAwesomeIcon icon={faFlag} style={styles.flags} />
                              <TouchableOpacity style={{marginLeft:20,}} onPress={() => 
                                navigation.navigate("Comments",{flagComments : flag.comment})
                                
                                }>

                                 <Text style={[styles.username3,{width:55,}]}>{flag.commentCount}</Text>
                                 <FontAwesomeIcon icon={faComment} style={styles.commentIcon} />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                        <TouchableOpacity style={styles.upvoteBtn} onPress={likes != null  ? addLike : deleteLike}>
                              <Text style={styles.upvoteTXT}>{likes != null  ? 'upvote ' : 'downvote '}</Text>
                        </TouchableOpacity>



                        {/* <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording} /> */}

                    
                  </View>
                    
                </View>
                 )))} 
                  
              </ScrollView> 

                  
      
      <TouchableOpacity style={styles.buttonContainer} onPress={addButton}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
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
    backgroundColor:'white',
  },
  midContainer: {
    flex: 12,
    height: '500px',
    width: '100%',
    marginTop: 20,
    
  },
  boxes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    width: '100%',
    
  },
  inputBox: {
    height: 25,
    border: '1px solid black',
    width: '45%',
    marginTop: '25px',
    paddingLeft: '2%',
    backgroundColor: '#EDEDED',
    borderRadius: 4,
    fontSize:12,
    boxShadow: '#ababab 0px 6px 9px -3px;',
  },
 
  searchIconBtn: {
    backgroundColor: '#D2373C',
    width: '30px',
    height: '30px',
    paddingTop: '7px',
    paddingLeft: '8px',
    borderRadius: '20px',
    marginTop: '23px',
    boxShadow: '#ababab 0px 6px 9px -1px;',
  },
  searchIcon: {
    color: '#EDEDED',
  },
  dateContainerBorder: {
    width: 70,
    
  },
  dateContainer: {
    flexDirection:'row',
    height: 40,
    marginTop: 20,
    paddingTop:15,
    borderRightWidth: 1,
    borderRightColor: 'black',
    
  },
  userContainerRightBorder:{
    flex:3,
  },
  userContainer: {
    height: 40,
    width:180,
    borderRightColor:'black',
    paddingLeft:10,
    marginTop:20,
  },
  bottomContainer: {
    backgroundColor: '#000000',
    height: '15%',
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    width: '92%',
    marginLeft: 15,
    boxShadow: '#ababab 0px 6px 9px -3px;',
    borderRadius:10

  },
  buttonContainer: {
    backgroundColor: '#D2373C',
    width: '50px',
    height: '50px',
    paddingLeft: 16,
    borderRadius: 50,
    marginRight: 15,
    alignSelf: 'flex-end',
   
  },
  button: {
    color: '#EDEDED',
    fontSize: '1.8em',
  },
  day: {
    color: 'red',
    fontSize:10,
  },
  month: {
    fontSize: 10,
    color: '#D2373C',
    fontWeight: 'bolder',
  },
  year: {
    paddingLeft:10,
    fontSize: 10,
    color: '#D2373C',
  },
  username1: {
    paddingLeft: 10,
    fontSize: 12,
  },
  username2: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 10,
  },
  username3:{
    paddingTop: 10,
    fontSize: 10,
    paddingLeft:35,
  },
  comments: {
    display: 'flex',
    flexDirection: 'row',
  },
  commentIcon: {
    paddingTop: 10,
    position: 'absolute',
    paddingLeft: 60,
  },
  flags: {
    paddingTop: 10,
    paddingLeft: 40,
    color: '#D2373C',
    position: 'absolute',
  },
  upvoteBtn: {
    flex: 1,
    border: '1px solid #6200EE',
    height: 22,
    width: 40,
    marginTop: 30,
    marginRight: 10,
    borderRadius: 4,
  },
  upvoteTXT: {
    paddingLeft: 8,
    paddingTop: 2,
    fontSize: 11,
    color: '#6200EE',
    fontWeight: 'bold',
  },
  dropdownPick:{
    height: 25,
    width:120,
    borderColor: 'grey',
    border:'1px solid black',
    borderRadius: 4,
    boxShadow: '#ababab 0px 6px 9px -3px;',
    backgroundColor: '#EDEDED',
    paddingLeft: '2%',
    fontSize:12,
},
});