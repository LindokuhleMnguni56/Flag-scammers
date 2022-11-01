import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Modal,Image, Touchable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import RedPart from '../components/topPart';
import RedPart2 from '../components/secureTopParts';
import { Picker } from 'react-native-web';
import MoonLoader from "react-spinners/MoonLoader";
// import { Icon } from 'react-native-vector-icons/Icon';
import { db } from './config/firebase';
import { auth } from './config/firebase';
import {arrayUnion,addDoc, collection,updateDoc, doc, deleteDoc, getDocs, query, where, getDoc, onSnapshot , documentId} from 'firebase/firestore';
import Comments from './Comments';
import { async } from '@firebase/util';
import React from 'react';
import ConfirmationPopup from "../components/modal";
import modalImage from "../assets/cross3.png";




export default function HomeScreen({ navigation }) {

  const [visible, setVisible] = React.useState(false);
  const [signInVisible, setSignInVisible] = React.useState(false);

  let [loading, setLoading] = React.useState(true);
  const [flags, setFlags] = React.useState([]);
  let [flagState, setFlagState] = React.useState(false);
  const listFlag = [];
  const likes=[];
 

  const [like,setLike]=React.useState(1);
  const [dislikes,setDislikes]=React.useState(-1);

 
  const [users, setUsers] = React.useState('');
  const [address, setAddress] = React.useState('')
  const itemRef = collection(db, "flags");
  const [selectedAddress, setSelectedAddress] = React.useState('');
  const [addresses] = React.useState([
    'Email Address',
    'Physical Address'
  ]
  );
  const flagRef = collection(db, "flag");
  const commentRef = collection(db, "comments");
 const user=auth.currentUser
  console.log(user);
  const addButton = async () => {
    if (user == null) {
      // navigation.push('Login');
      setVisible(true);
    } else {
      navigation.push('AddScammer');
    }
    
  }

  const close = () => {
    setVisible(false);
    setSignInVisible(false)
  };
  const signInClose = () => {
    setVisible(false)
    setSignInVisible(false)
    navigation.navigate("Login");
  }
  const getItems = async () => {
    console.log(flagRef);
    let likeFlag = false
    // setFlagState(false)
   
    
    let data = await getDocs(flagRef);
    const q = query(collection(db, "flag"));
    const querySnapshot = await getDocs(q)
    const userT=auth.currentUser

    querySnapshot.forEach((doc) => {
      let commentCount = doc.data().comments.length
      let likes = doc.data().likes
      console.log(likes);
      let likesCount = doc.data().likes.length
      
      likes.forEach((dataLike) =>{
        // setFlagState(true)
        if(dataLike == userT?.displayName){
          console.log("this user voted fpr this flag");
          likeFlag = true;
          // setFlagState(true)
          
        } 
      })
      
      listFlag.push({ id: doc.id, address: doc.data().address, comment: doc.data().comments, date: doc.data().date, commentCount: commentCount,likesCount:likesCount, upvoted:likeFlag})
      likeFlag = false;
      // setFlagState(false)
    });
    setFlags(listFlag)
    setLoading(false)
    console.log(listFlag);

  }
  const addLikes = async(flag) =>{
    if (user != null) {

      let newLikes = []
    let oldLikes = {}
    const docRef = doc(db, "flag", flag.id);

    const docSnap = await getDoc(docRef);
    oldLikes =  docSnap.data().likes
    console.log(oldLikes);
    var index = oldLikes.indexOf(user.displayName) 
    if(flag.upvoted ){
      if (index !== -1) {
      console.log("we are removing you");

        oldLikes.splice(index, 1);
        await updateDoc(docRef, {
          likes: oldLikes
        });
        getItems();
        setFlagState(false)
     
      }

    }else{
      console.log("we are adding you");
     
      oldLikes.push(user.displayName)
      await updateDoc(docRef, {
        likes: oldLikes
      });
      getItems()
      setFlagState(true)

      
     
    }
    console.log(oldLikes);

    }else{
      setSignInVisible(true)
    }
    

 }

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const d = new Date();
let monthName = months[d.getMonth()];
let YDAY= `${d.getDate()}/${d.getFullYear()}`
console.log(YDAY);


  const search = async () => {
   
        if (address != ''){

          const q = query(collection(db, "flag"),where("address", "==", address ));
          const Nq = query(collection(db, "flag"),where("address", "!=", address ));
          const querySnapshot = await getDocs(q)
          const notQuerySnapshot = await getDocs(Nq)
  
         let flag = false;
  
          querySnapshot.forEach((docs) => {
             
            const selectedAddress=docs.data().address
            console.log(selectedAddress);
            flag=true;
            
          }
  
          );
  
          if (flag==true){
            // navigation.navigate("Comments")
            querySnapshot.forEach((docs) => {
             
              const selectedAddress=docs.data().address
  
              navigation.navigate("Comments", { flagComments: docs.data().comments, flagAddress: docs.data().address, flagDate: docs.data().date });
              
              
            })
            
          }else{
            navigation.navigate("NotFound",{flagAddress:address})
  
          }
          
          
        }else{
          console.log('enter address');
        }
      
       
       
        
       

    
  }

  
  React.useEffect(() => {
    console.log("some")
    getItems();
  }, [])
  
  
  return (
    <SafeAreaView style={styles.container}>
      {user != null ? (<RedPart2 />) : (<RedPart />)}
      {loading ? (
        <>
          <View style={{ flex: 2, display: 'flex', justifyContent: 'center',alignItems:'center' ,height: '100%' }} >
            <MoonLoader
              color={"#D2373C"}
              loading={loading}
              
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <Text style={{marginTop:10}}>Loading Content please wait...</Text>
        </View>
              </>
            ) :
              (
                <>
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
              <TextInput style={styles.inputBox} placeholder='Enter Address...' onChangeText={(address)=>setAddress(address)}></TextInput>
              <TouchableOpacity onPress={search}><View style={styles.searchIconBtn} ><FontAwesomeIcon icon={faSearch} style={styles.searchIcon} /></View></TouchableOpacity>
            </View>
            <ScrollView style={styles.midContainer}>
              {
                flags.map(flag => ((
                  <View style={styles.cardsContainer} key={flag.id}>
                    <View style={styles.card}>
                        <View style={styles.dateContainer}>
                          <Text style={styles.day}>{d.getDate()}</Text>
                          <Text style={styles.month}>{monthName}</Text>
                          <Text style={styles.year}>{d.getFullYear()}</Text>
                        </View>
                      
                        <View style={styles.userContainerRightBorder}>
                        <View style={styles.userContainer}>
                              <TouchableOpacity onPress={() =>
                                navigation.navigate("Comments", { flagComments: flag.comment, flagAddress: flag.address, flagDate: flag.date,flagCount:flag.likesCount })
                              }>
                                <Text style={styles.username1}>{flag.address}</Text>
                              </TouchableOpacity>
                              <View style={styles.comments}>
                                
                                <TouchableOpacity onPress={()=> {addLikes(flag)}} 

                                
                                style={{backgroundColor: '#EDEDED',borderRadius:10,width:80,padding:5,flexDirection:'row',justifyContent:'center',border:'1px solid lightgrey'}}>


                                  <Text style={[styles.username2, { width: 20 }]}>{flag.likesCount}</Text>
                                  <FontAwesomeIcon icon={faFlag} style={flag.upvoted!= true?{color:'grey'}:{color:'#D2373C'}} />
                                </TouchableOpacity>

                                <TouchableOpacity 
                                style={{ marginLeft: 20,backgroundColor: '#EDEDED',borderRadius:10,width:80,padding:5,flexDirection:'row',justifyContent:'center',border:'1px solid lightgrey' }} 
                                onPress={() =>
                                  navigation.navigate("Comments", {  flagComments: flag.comment, flagAddress: flag.address, flagDate: flag.date,flagCount:flag.likesCount })
                                } >
                                  <Text style={[styles.username2, { width: 20, }]}>{flag.commentCount}</Text>
                                  <FontAwesomeIcon icon={faComment} style={styles.commentIcon} />
                                </TouchableOpacity>
                              </View>
                        </View>
                      </View>
                    
                    </View>
                  </View>
                )))}
            </ScrollView>
          </>
        )
      }
       <View style={styles.bottomContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="white" fillOpacity="1" d="M0,32L120,53.3C240,75,380,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </View>
      <View>
          <ConfirmationPopup visible={signInVisible}>
            <Image
              source={modalImage}
              style={{ width: 50, height: 50, alignSelf: "center" }}
            />
            <Text
              style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
            >
              Please login first to like a flag
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{backgroundColor: "#f3f5f6",width:80,height:30,borderRadius:20,textAlign:'center',justifyContent:'center'}} onPress={() => close()}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: "rgb(255,240,242)",width:80,height:30,borderRadius:20,textAlign:'center',justifyContent:'center',padding:4}} onPress={() => signInClose()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
          </ConfirmationPopup>
        </View>
      <View>
          <ConfirmationPopup visible={visible}>
            <Image
              source={modalImage}
              style={{ width: 50, height: 50, alignSelf: "center" }}
            />
            <Text
              style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
            >
              Please login first to add a flag 
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{backgroundColor: "#f3f5f6",width:80,height:30,borderRadius:20,textAlign:'center',justifyContent:'center'}} onPress={() => close()}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: "rgb(255,240,242)",width:80,height:30,borderRadius:20,textAlign:'center',justifyContent:'center',padding:4}} onPress={() => signInClose()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
          </ConfirmationPopup>
        </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={addButton}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  midContainer: {
    flex: 12,
    height: '500px',
    width: '100%',
    marginTop: 40,
  },
  boxes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  inputBox: {
    height: 25,
    border: '1px solid black',
    width: '45%',
    marginTop: '25px',
    paddingLeft: '2%',
    paddingRight:'2%',    
    backgroundColor: "#f3f5f6",
    borderRadius: 4,
    fontSize: 12,
    boxShadow: '#ABABAB 0px 6px 9px -3px;',
  },
  searchIconBtn: {
    backgroundColor: '#D2373C',
    width: '30px',
    height: '30px',
    paddingTop: '7px',
    paddingLeft: '8px',
    borderRadius: '20px',
    marginTop: '23px',
    boxShadow: '#ABABAB 0px 6px 9px -1px;',
  },
  searchIcon: {
    color: '#EDEDED',
  },
  dateContainer: {
    flexDirection: 'column',
    width:'20%',
    padding:20,
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  
  userContainer: {
    width: 180,
    paddingLeft: 10,
    paddingTop: 10,
    
  },
  bottomContainer: {
    backgroundColor: '#000000',
    height: '10%',
    width: '100%',
    position:"relative"
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    width: '92%',
    marginLeft: 15,
    boxShadow: '#ABABAB 3px 3px 7px -3px;',
    borderRadius: 10,
    paddingBottom:10,
    paddingTop:20
  },
  buttonContainer: {
    backgroundColor: '#D2373C',
    width: '50px',
    height: '50px',
    paddingLeft: 16,
    borderRadius: 50,
    marginRight: 15,
    alignSelf: 'flex-end',
    position:'absolute',
    bottom:70

  },
  button: {
    color: '#EDEDED',
    fontSize: '1.8em',
  },
  day: {
    color: 'red',
    fontSize: 10,
    paddingLeft:3
  },
  month: {
    fontSize: 10,
    color: '#D2373C',
    fontWeight: 'bolder',
  },
  year: {
    fontSize: 10,
    color: '#D2373C',
  },
  username1: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight:'bold',
    width:240,
  },
  username2: {
    fontSize: 10,
    
  },

  comments: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingTop:10,
    width:'120%',
    

  },
  commentIcon: {
    
    color:'grey',
  },
  // flags: {
  //   color: '#D2373C',
    
    
  // },
  upvoteBtn: {
    flex: 1,
    height: 22,
    width: 40,
    marginTop: 30,
    marginRight: 10,
  },
  upvoteTXT: {
    paddingLeft: 8,
    paddingTop: 2,
    fontSize: 11,
    color: '#6200EE',
    fontWeight: 'bold',
  },
  dropdownPick: {
    height: 25,
    width: 120,
    borderColor: 'grey',
    border: '1px solid black',
    borderRadius: 4,
    boxShadow: '#ABABAB 0px 6px 9px -3px;',
    backgroundColor: "#f3f5f6",
    paddingLeft: '2%',
    fontSize: 12,
  },
  cardsContainer:{
    paddingBottom:10,
   
  },
});










