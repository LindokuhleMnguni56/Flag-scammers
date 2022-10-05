import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
<<<<<<< HEAD
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import react from 'react';
import { auth } from './config/firebase';

export default function Login({navigation}){
  const [email,setEmail]=react.useState('');
  const [password,setPass]=react.useState('');

  const login = (()=>{

    signInWithEmailAndPassword(auth, email, password).then(()=>{
      navigation.push('Home');
    }).catch((err)=>{

        console.log(err);
    })
    
})
=======
import Icon from 'react-native-vector-icons/FontAwesome'
>>>>>>> b0f28ae99224a7de3180d832d467b3c311043d81

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.text}>Login</Text>

      <View style={styles.inputContainer}>
<<<<<<< HEAD
        <TextInput
        placeholder='Email'
        style={styles.input}
        onChange={(e)=>setEmail(e.target)}
        />
        <TextInput
            placeholder='Password'
            style={styles.input}
            onChange={(e)=>setPass(e.target)}
=======

      
       <View style={styles.LoginTxt}>
        <Icon
        color='red'
        name='envelope'
        type='font-awesome'
        size={12}
        />
       <TextInput
          placeholder='Email'
          style={styles.input}
        />
       </View>

       <View style={styles.LoginTxt}>
        <Icon
        color='red'
        name='lock'
        type='font-awesome'
        size={16}
        />
       <TextInput
          placeholder='Password'
          style={styles.input}
>>>>>>> b0f28ae99224a7de3180d832d467b3c311043d81
        />
       </View>    
      </View>

      <View style={styles.forget}>
          <TouchableOpacity style={styles.for}>
            <Text style={styles.textForget}>Forget password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.for}
          onPress={() => navigation.push('Register')}
          >
            <Text style={styles.textForget}>Don't have an account click here</Text>
          </TouchableOpacity>

        </View>

      <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
<<<<<<< HEAD
                onPress={login}
            >
              <FontAwesomeIcon icon={ faEnvelope} />
=======
            >
>>>>>>> b0f28ae99224a7de3180d832d467b3c311043d81
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.OR}>
          <Text style={{}}>OR</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      paddingHorizontal:30,
      justifyContent:'center',

    },
    header:{
        color:"red",
        marginLeft:"20%",
        fontFamily:'coda',
        fontWeight:'200',
        fontSize:'25px',
        lineHeight:35,
    },

    text:{
      marginLeft:'80%'
    },

    Login:{
      display:'flex',
      flexDirection:'row',
 
      

    },

   
    input:{
      width:'100%',
  
     
   
    },

    LoginTxt:{
      width:'100%',
      height:44,
      paddingHorizontal:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      borderBottomColor:'gray',
      borderBottomWidth:1,
      paddingHorizontal:2,


   

    },

    forget:{
      display:'flex',
      flexDirection:"row",
    },

    for:{
      width:'190px',
    },

    textForget:{
      fontFamily:'coda',
      fontStyle:'normal',
      fontWeight:'200',
      fontSize:'15px',
      lineHeight:'23px',
      color:'#34B1F8',

    },
  


    buttonContainer:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'10%',
      paddingHorizontal:50

  },
  
  button:{
      backgroundColor:'red',
      width:'100%',
      padding:15,
      borderRadius:10,
      alignItems:'center',
      fontSize:'bold'
      
    },
    buttonText:{
      
      fontSize:'bold'
    },

    bottomContainer:{
      backgroundColor:'black',
      marginTop:'10%'
      
    }
  });

