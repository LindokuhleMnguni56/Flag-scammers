
import {StyleSheet,SafeAreaView, View,Text, TextInput, ScrollView,Image,TouchableOpacity,FlatList, Modal } from 'react-native';
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
import ConfirmationPopup from '../components/modal';
import modalImage from '../assets/tick.png'



export default function Comments({route,navigation}){

    const [visible, setVisible] = React.useState(false);
   
    const [flag,setFlag]= React.useState([]);
    const[comment,setComments]=React.useState('')

    let comments = []
    let commentList =[]
    
    const user = auth.currentUser;
    const { flagComments } = route.params;
    const { flagAddress } = route.params;
    const {flagDate} = route.params;
    const {flagCount} = route.params;
    comments = flagComments;
    // getComment()
    comments.forEach((comment,index)=>{
        let k = (Object.keys(comments[index]))
            console.log(k[0]);
           commentList.push({userName:k[0] ,commentMsg :comment[k]})
    })
    // console.log(commentList);

   
    
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
                       commentList.push({userName:k[0] ,commentMsg :comment[k]})
                })
           
            
        });
        
      
     }
     console.log(flag);

     const addComment = async() =>{
       
        const q = query(collection(db, "flag"),where("address", "==", flagAddress ));
        const querySnapshot = await getDocs(q)

        if(comment !== ''){
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
      setVisible(true);
    }else{
        setVisible(false)
    }
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
        <ScrollView style={styles.commentsBox} >
            <Text style={{marginLeft:15,width:'92%', color: 'grey',fontFamily:'sans-didot',fontSize:12}}>{comment.userName} says... </Text>
            <Text style={styles.userComments}>
                {comment.commentMsg}  
            </Text>

        </ScrollView>
      );

      const close = () =>{
        setVisible(false)
    }

    return(
        <SafeAreaView style={styles.container}>
          {user != null ?(<RedPart2 />):(<RedPart />)}
                <View style={styles.card}>
                    <View style={styles.dateContainer}>
                        <View style={styles.dateContainerBorder}>
                            <Text style={styles.year}>{flagDate}</Text>
                            
                        </View>
                    </View>
                    <View style={styles.userContainer}>
                          <View style={styles.userContainerBorder}>
                                  <Text style={styles.username}>{flagAddress}</Text>
                          </View>
                          <View style={styles.likes}>
                                <FontAwesomeIcon icon={ faFlag } style={styles.flags}/><Text style={styles.numberFlags}>{flagCount}</Text>
                          </View>
                    </View>
                </View>
            <View style={styles.midContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.textBox} >
                        <TouchableOpacity style={styles.userIconBg} onPress={() => navigation.push('Pro')}>
                            <Image source={user.photo} style={{height:30, borderRadius:50,}} />
                        </TouchableOpacity>
                        <View style={styles.addCommentContainer}>
                            <TextInput style={styles.addComment} multiline={true} placeholder='Add a comment....' onChangeText={comment => setComments(comment)}></TextInput>
                            <TouchableOpacity style={styles.sendButton}><Text style={{fontSize:12}} onPress={addComment}>Add Comment</Text></TouchableOpacity>
                        </View>
                </View>
                <View>
                    <ConfirmationPopup visible={visible}>
                    <Image source={modalImage} style={{width:50,height:50,alignSelf:'center'}}/>
                    <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
                        Comment Added
                    </Text>
                    <TouchableOpacity onPress={() =>close()}><Text>OK</Text></TouchableOpacity>             
                    </ConfirmationPopup>
                </View>

                <FlatList keyExtractor={item => item.id} data={commentList} renderItem={renderItem}  />

            </View>
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
        backgroundColor:'#000000',
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
        width:85,
        
    },
    dateContainerBorder:{
      flexDirection: 'row',
      height:40,
      width:65,
      marginTop:15,
      paddingTop: 15,
      borderRightWidth:1,
      borderRightColor:'black',
      
    },
    month:{
        paddingLeft:2,
        fontSize:10,
        color:'#D2373C',
        fontWeight:'bolder',
    },
    year:{
        paddingLeft:5,
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
        paddingTop:15,
    },
    likes:{
        fle:1,
        display:'flex',
        flexDirection:'row',
        height:40,
        marginLeft:45,
        marginTop:26,
    },
    username:{
      width:180,
      alignSelf:'flex-start',
      paddingLeft:10,
      fontSize:12
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
        flexDirection:'column',
        marginTop:10,
        width:'100%',
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
        width:'92%',
        backgroundColor:'rgb(255,240,242)',
        padding:15,
        marginTop:5,
        marginLeft:15,
        paddingLeft:10,
    },
  });