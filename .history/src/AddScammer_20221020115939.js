import { SafeAreaView, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { db,auth } from './config/firebase';
import {addDoc,collection} from 'firebase/firestore'
import Top from '../components/secureTopParts';
import RedPart2 from '../components/secureTopParts';
import Icon  from 'react-native-vector-icons/FontAwesome'

// import {Picker} from '@react-native-picker/picker';
import { Picker } from 'react-native-web'


const AddScammer = () => {

    const [mail,setMail]=useState('');
    const [comment,setComment]=useState('');
   

    const itemRef =collection(db,"flag");
    const commentRef = collection(db,"comments");
    
    const [selectedAddress, setSelectedAddress] = useState('');
    const [addresses] = useState([
        'Email Address',
        'Physical Address'
    ]
    );

    const user=auth.currentUser

    const addflag = async()=>{
        if (user!=null){
            //add to flag
            const docRef = await addDoc(itemRef,{address:mail ,userId:user.uid,addressType:selectedAddress}).then({
                
            })
            console.log("New Flag  ID: ", docRef.id);
            //add to comments
            await addDoc(commentRef,{comment:comment ,userId:user.uid,address:mail, flagId:docRef.id})
        }

        alert('flag added')
    }


    
  return (
    <SafeAreaView style={styles.container}>
        {/* <RedPart2/> */}
        <View style={styles.midContainer}>
            <View style={styles.text}>
                <Text style={styles.txt}>ADD A SCAMMER</Text>
            </View>
            <View style={styles.hhh}>

            <View style={styles.selectView}>
            {/* <DropdownPicker /> */}
            <Picker
            style={[styles.dropdownPick, {marginTop: '25px',marginVertical:10,backgroundColor:''}]}
            selectedValue = {selectedAddress}
            onValueChange = {( itemVal) => {
                setSelectedAddress(itemVal); 
                console.log({selectedAddress});
                
            }}
            >
            {
                addresses.map((a) => (
                    <Picker.Item label={a} value={a} key={a} />
                ))
            }
        </Picker>
          </View>


            <View style={styles.txtInput}>
            <Icon
                color='red'
                name='flag'
                type='font-awesome'
                size={15}
            />
            <TextInput onChangeText={mail=>setMail(mail)}
                placeholder='Enter Scam Address'
                style={styles.textInput}
              />
            </View>
            <View style={styles.comment}>
                <TextInput onChangeText={comment=>setComment(comment)}
                placeholder='Add Comment...'
                style={styles.addComment}
                />
            </View>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={addflag}
                style={styles.button}
            >
                <Text style={styles.buttonText}>FLAG</Text>
            </TouchableOpacity>
        </View>


        </View>
    </SafeAreaView>
  )
}

export default AddScammer

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        height:'100%',
        width:'100%'
    },
    midContainer:{
        flex:12,
        padding:'20px',
      
    
    },

    text:{
        height:'5px',
        alignItems:'center',
        padding:'35px',
        boxShadow: '#ababab 0px 6px 9px -3px',
       
    },

    selectView: {
        display: 'flex',
        flexDirection: 'row',
        width: '35%',
        
      
    },
    txt:{
        fontFamily:'coda',
        fontSize:'normal',
        fontWeight:400,
        fontSize: '20px',
        color: 'rgba(0, 0, 0, 0.8)',
    },

    txtInput:{
        width:'100%',
        height:44,
        paddingHorizontal:20,
        display:'flex',
        marginTop:'10%',
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'grey',
        borderBottomWidth:1,
        

    
        
    },

    textInput:{
        width:'100%',
        paddingLeft:'10px', 
       
    },

  
    addComment:{
        padding:'20px',
        height:'100px',
        boxShadow: '#ababab 0px 6px 9px -3px',
        marginTop:'10%',
        borderRadius:'10px',
        borderColor:'grey'
        

    },

    buttonContainer:{
        flex:3,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%',
        paddingHorizontal:50
      },
  
      button:{
        backgroundColor:'#EA4335',
        width:'100%',
        padding:15,
        borderRadius:'27px',
        alignItems:'center',
        fontSize:'bold'
        
      },
  
      buttonText:{
        color:'white',
       fontSize:'bold'
     },
  
     bottomContainer:{
      backgroundColor:'black',
      marginTop:'10%',
    },

    hhh:{
        paddingHorizontal:'25px',
        marginTop:'100px'
    }



    
})