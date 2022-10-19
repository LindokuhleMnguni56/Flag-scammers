import { SafeAreaView, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState,u } from 'react'
import { db } from './config/firebase';
import Top from '../components/secureTopParts'
import Icon  from 'react-native-vector-icons/FontAwesome'
import DropdownComponent from '../components/dropdownList';


const AddScammer = () => {
    const [address,setAdress]=useState('')
    const [type,setType]=useState('')
    const itemRef =collection(db,"flags");
    const getItems = async()=>{
        let data = await getDocs(itemRef);
        setItem(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }
    
  const addItems = async()=>{
    await addDoc(itemRef, {task:task, priority:priority})
    alert("flag added Successfully");
   getItems();
   }
    
  return (
    <SafeAreaView style={styles.container}>
        <Top/>
        <View style={styles.midContainer}>
            <View style={styles.text}>
                <Text style={styles.txt}>ADD A SCAMMER</Text>
            </View>
            <View style={styles.hhh}>

            <View style={styles.selectView}>
            <DropdownComponent/>
          </View>


            <View style={styles.txtInput}>
            <Icon
                color='red'
                name='flag'
                type='font-awesome'
                size={15}
            />
            <TextInput
                placeholder='Enter Scam Address'
                style={styles.textInput}
            />
            </View>
            <View style={styles.comment}>
                <TextInput
                placeholder='Add Comment...'
                style={styles.addComment}
                />
            </View>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
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