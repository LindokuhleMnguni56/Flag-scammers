
import {StyleSheet,SafeAreaView, View,Text, TextInput, ScrollView,Image,TouchableOpacity,FlatList } from 'react-native';
import RedPart from '../components/topPart';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFlag, faLaptopFile } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../assets/pic.png'
// import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { auth } from './config/firebase';
import RedPart2 from '../components/secureTopParts';
import {addDoc, collection,doc,merge, deleteDoc,getDocs,query,where,getDoc,onSnapshot,UpdateData,setDoc, updateDoc,arrayUnion} from 'firebase/firestore';
import { db } from './config/firebase';
import React from 'react';
import { async } from '@firebase/util';

export default function Comments({route,navigation}){

    const [likes,set]
    const [flag,setFlag]= React.useState([]);
    const[comment,setComments]=React.useState('')

    let comments = []
    let commentList =[]
    
    const user = auth.currentUser;
    const { flagComments } = route.params;
    const { flagAddress } = route.params;
    comments = flagComments;
    // getComment()
    comments.forEach((comment,index)=>{
        let k = (Object.keys(comments[index]))
            console.log(comment[k]);
           commentList.push(comment[k])
    })

   
    
    const ref = collection(db,'flag');

        
   
      const getComment = async() =>{

            const q = query(collection(db, "flag"),where("address", "==", flagAddress ));
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach((doc) => {
                comments = doc.data().comments

                // const commentRef = doc(db, "flag", doc.id);
                console.log(comments);
                comments.forEach((comment,index)=>{
                    let k = (Object.keys(comments[index]))
                        console.log(comment[k]);
                       commentList.push(comment[k])
                })
           
            
        });
      
     }
     console.log(flag);

     const addComment = async() =>{
       
        const q = query(collection(db, "flag"),where("address", "==", flagAddress ));
        const querySnapshot = await getDocs(q)

       
        comments.push({[user.displayName]:comment})
        console.log(comments);
        querySnapshot.forEach((docs) => {
           
           console.log(docs.id)
             const commentRef = doc(db, "flag", docs.id);
           console.log(comments)
           
             updateDoc(commentRef , {
            comments : 
                     comments
            }).then(() =>{

          getComment()
            })
        
      });
      getComment()
     }

     React.useEffect(()=>{
        
        // console.log(getComment())
        getComment();
       
     }, [])
    
   
     const renderItem = ({ item }) => <Item comment={item} />;
     const Item = ({ comment }) => (
        // <View style={styles.item}>
        //   <Text style={styles.title}>{title}</Text>
        // </View>
        <View style={styles.commentsBox} >
        <TouchableOpacity style={styles.userIconBackground}>
            <Image source={profileImg} style={{height:30, borderRadius:50,}} />
        </TouchableOpacity>
        <Text style={styles.userComments}>
            {comment}
        </Text>
    </View>
      );

    return(
        <SafeAreaView style={styles.container}>
          {user != null ?(<RedPart2 />):(<RedPart />)}
            <View style={styles.card}>
                    <View style={styles.dateContainer}>
                        <View style={styles.dateContainerBorder}>
                            <Text style={styles.day}>15</Text>
                            <Text style={styles.month}>May</Text>
                            <Text style={styles.year}>2021</Text>
                        </View>
                    </View>
                    <View style={styles.userContainer}>
                          <View style={styles.userContainerBorder}>
                                  <Text style={styles.username}>{flagAddress}</Text>
                          </View>
                          <View style={styles.likes}>
                                <FontAwesomeIcon icon={ faFlag } style={styles.flags}/><Text style={styles.numberFlags}>1k</Text>
                          </View>
                    </View>
                </View>
            <ScrollView style={styles.midContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.textBox} >
                        <TouchableOpacity style={styles.userIconBg} onPress={() => navigation.push('Pro')}>
                            <Image source={profileImg} style={{height:30, borderRadius:50,}} />
                        </TouchableOpacity>
                        <View style={styles.addCommentContainer}>
                            <TextInput style={styles.addComment} multiline={true} placeholder='Add a comment....' onChangeText={comment => setComments(comment)}></TextInput>
                            <TouchableOpacity style={styles.sendButton}><Text style={{fontSize:12}} onPress={addComment}>Add Comment</Text></TouchableOpacity>
                        </View>
                </View>

          
 <FlatList data={commentList} renderItem={renderItem} keyExtractor={item => item.id} />

            </ScrollView>
            <View style={styles.bottomContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="white" fillOpacity="1" d="M0,32L120,53.3C240,75,380,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      backgroundColor:'white',
    },
    sendButton:{
        alignSelf:'flex-end',
        marginRight:37,
        marginVertical:6,
        backgroundColor:'rgb(255,240,242)',
        borderRadius:4,
        width:110,
        height:25,
        textAlign:'center',
        justifyContent:'center',
    },
    midContainer:{
        flex:12,
        height:'500px',
        width:'100%',
        marginTop:20,
      },
    bottomContainer:{
        backgroundColor:'white',
        height:'17%',
        width:'100%',
    },
    card:{
    display:'flex',
    flexDirection:'row',
    height:60,
    width:'92%',
    marginTop:20,
    boxShadow:'#ABABAB 0px 6px 9px -3px;',
    },
    dateContainer:{
        flex:1,
        width:80,
    },
    dateContainerBorder:{
      height:40,
      marginTop:15,
      borderRightWidth:1,
      borderRightColor:'black',
      width:50,
    },
    day:{
        paddingLeft:20,
        fontSize:10,
        color:'#D2373C',
    },
    month:{
        paddingLeft:15,
        fontSize:10,
        color:'#D2373C',
        fontWeight:'bolder',
    },
    year:{
        paddingLeft:15,
        fontSize:10,
        color:'#D2373C',
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
    likes:{
        fle:1,
        display:'flex',
        flexDirection:'row',
        height:40,
        marginLeft:45,
        marginTop:25,
    },
    username:{
      width:180,
    },
    flags:{
        color:'#D2373C',
    },
    numberFlags:{
      marginLeft:5,
      fontSize:12,
    },
    textBox:{
        display:'flex',
        flexDirection:'row',
        marginLeft:15,
        marginTop:20,
        borderBottomWidth:2,
        borderBottomColor:'#BD5D5D',
        height:100,
        width:'92%',
    },
    userIconBg:{
        backgroundColor:'grey',
        width:30,
        height:30,
        borderRadius:50,
        marginTop:5,
    },
    userIcon:{
        paddingTop:6,
        paddingLeft:6,
    },
    addCommentContainer:{
        width:'100%',
        flexDirection:'column',
    },
    addComment:{
        fontSize:12,
        marginLeft:15,
        paddingHorizontal:6,
        paddingVertical:6,
        height:55,
        width:'85%',
        paddingBottom:40,
        border:'2px solid lightgrey',
        borderRadius:4,
    },
    commentsButton:{
        alignSelf:'flex-end',
        marginRight:35
    },
    commentsBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:10,
        zIndex:3000,
        
    },
    userIconBackground:{
        backgroundColor:'grey',
        width:30,
        height:30,
        borderRadius:50,
        marginTop:5,
    },
    commentsUserIcon:{
        paddingTop:6,
        paddingLeft:6,
    },
    userComments:{
        fontSize:12,
        width:'80%',
        backgroundColor:'rgb(255,240,242)',
        padding:15,
    },
  });