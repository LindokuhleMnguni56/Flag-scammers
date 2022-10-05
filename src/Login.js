import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
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

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.text}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
        placeholder='Email'
        style={styles.input}
        onChange={(e)=>setEmail(e.target)}
        />
        <TextInput
            placeholder='Password'
            style={styles.input}
            onChange={(e)=>setPass(e.target)}
        />
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
                onPress={login}
            >
              <FontAwesomeIcon icon={ faEnvelope} />
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View>
          <Text>OR</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      paddingHorizontal:10,
      justifyContent:'center',

    },
    header:{
        color:"red",
        marginLeft:100,
        fontFamily:'coda',
        fontWeight:'200',
        fontSize:'25px',
        lineHeight:35,
    },

    text:{
      marginLeft:300
    },

   
    input:{
      height:50,
      marginBottom:30,
      borderBottomColor:'gray',
      borderBottomWidth:1,
      paddingHorizontal:10,
   
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

