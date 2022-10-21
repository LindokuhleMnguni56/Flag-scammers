import { View, Text,StyleSheet, TextInput, TouchableOpacity, ImageBackground,Image } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import react from 'react';
import { auth } from './config/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import image1 from "../assets/bg.png";
import image2 from '../assets/google.png';
import { signInWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
import  {LoginWithGoogle} from './config/firebase'

const provider = new GoogleAuthProvider();

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
// const googleLog = ()=>{
//   signInWithPopup(auth,provider).then((result)=>{
//       // alert("successfully logged in")
//       console.log(result);
//       setUser(result.user)
//       history("/home");
//   }).catch((err)=>{
//       console.log(err);
//   })
  
// }


const LoginWithGoogle =() =>{
  signInWithPopup(auth,provider).
  then((result)=>{
    console.log ((result));
    navigation.push("Home")
 
  }).catch ((error)=>{
    console.log(error)
  })

}




  return (
  <ImageBackground style={styles.wrapper} source={image1} >
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.text}>Login</Text>

      <View style={styles.inputContainer}>
    
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
          onChangeText={(email)=>setEmail(email)}
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
          onChangeText={(pass)=>setPass(pass)}
          secureTextEntry
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

                onPress={login}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.OR}> 
          <Text style={styles.ORTxt}>Or</Text>
        </View>

        
      <View style={styles.GoogleContainer}>
            <TouchableOpacity
                style={styles.GoogleButton}
                onPress={LoginWithGoogle}
            >
              <Image
               source={image2}
               style={{width:'30px', height:'30px'}}
               />
                <Text style={styles.googleButtonText}>Login with google</Text>
            </TouchableOpacity>
        </View>


    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      paddingHorizontal:30,
      justifyContent:'center',
      height:'100%'
      
    },

    header:{
      color:'#EA4335',
      marginTop:'20%',
      marginLeft:"20%",
      fontFamily:'coda',
      fontWeight:'200',
      fontSize:'25px',
    },

    text:{
      marginLeft:'80%',
      fontSize:'25px',
      fontFamily:'coda',
      fontStyle:'normal',
    },

    Login:{
      display:'flex',
      flexDirection:'row',
    },

    input:{
      width:'100%',
      paddingLeft:'10px',
    },

    LoginTxt:{
      width:'100%',
      height:44,
      paddingHorizontal:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      borderBottomColor:'grey',
      borderBottomWidth:1,
      paddingHorizontal:2,
    },

    forget:{
      width:'100px',
      display:'flex',
      flexDirection:"row",
      marginTop:"20px",

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

  GoogleContainer:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'5%',
    paddingHorizontal:50,
    
  },

  GoogleButton:{
    backgroundColor: '#FFFFFF',
    width:'100%',
    padding:15,
    alignItems:'center',
    fontSize:'bold',
    display:'flex',
    flexDirection:'row',
    borderRadius:'27px',

   
  },


  googleButtonText:{
    paddingLeft:"30px"
    
  },

  OR:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    marginTop:"10%", 
  },

  ORTxt:{
    fontFamily:'coda',
    fontWeight:400,
    fontSize:'25px',
    lineHeight:'35px',
    color:'#353535',
    textAlign:'center',
    } 
  




  });

