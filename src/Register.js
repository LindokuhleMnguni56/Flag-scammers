import { View, Text,StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react';
import {createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
import { auth } from './config/firebase';
import Icon from 'react-native-vector-icons/FontAwesome'
import image1 from "../assets/bg.png"
import image2 from '../assets/google.png'

const provider = new GoogleAuthProvider();


const Register = ({navigation}) => {
    const [uid,setUid]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [password,setPass]=React.useState('');
    const [user,setUser]=React.useState('');
    const [confirmPassword,setConfirmedPassword]=React.useState('');


  const register = ({navigation})=>{

    createUserWithEmailAndPassword(auth, email, password).then(async(userCredential)=>{

      const displayName = uid;
      setUser(()=>({...userCredential.user}));

       updateProfile(auth.currentUser, {displayName:displayName}).then().catch();
      alert(displayName+ "successfully")
      navigation.push('Home')
  }).catch((error)=>{
      alert(error);
      console.log(error)
  })
  
}


const RegisterWithGoogle =() =>{
  signInWithPopup(auth,provider).
  then((result)=>{
    console.log ((result));
    navigation.push("Home")
 
  }).catch ((error)=>{
    console.log(error)
  })

}


  return (

    <ImageBackground style={styles.wrapper} source={image1}>
    <Text style={styles.header}>Welcome </Text>
    <Text style={styles.text}>Register</Text>

    <View style={styles.inputContainer}>

      <View style={styles.RegisterTxt}>
      <Icon
        color='red'
        name='user'
        type='font-awesome'
        size={12}
        />

      <TextInput
        placeholder='Username'
        style={styles.input}
        onChangeText={(uid)=>setUid(uid)}
      />
      </View>

      
      <View style={styles.RegisterTxt}>
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

      <View style={styles.RegisterTxt}>
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
      <View style={styles.RegisterTxt}>

      <Icon
        color='red'
        name='lock'
        type='font-awesome'
        size={16}
        />
      <TextInput
        placeholder='Confirm Password'
        style={styles.input}
        onChangeText={(conf)=>setConfirmedPassword(conf)}
        secureTextEntry
      />
      </View>
    </View>



    <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.button}
              onPress={register}
          >
              <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
      </View>

          
    <View style={styles.forget}>
        <TouchableOpacity style={styles.account}
        onPress={() => navigation.push('Login')}
        >
          <Text style={styles.txtAccount}>Have an account click here</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.OR}>
          <Text style={styles.ORTxt}>Or</Text>
        </View>

        
      <View style={styles.GoogleContainer}>
            <TouchableOpacity
                style={styles.GoogleButton}
                onPress={ RegisterWithGoogle}
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
    width:'100%'
  },


  header:{
    color:'#EA4335',
      marginTop:160,
      marginLeft:60,
      fontFamily:'coda',
      fontWeight:'200px',
      fontSize:'25px',
  },

  text:{
    marginLeft:'70%',
      fontSize:'25px',
      fontFamily:'coda',
      fontStyle:'normal',
  },

  RegisterTxt:{
    display:'flex',
    flexDirection:'row',
  },

 
  input:{
    width:'100%',
    paddingLeft:10,
    paddingTop:5,
    paddingBottom:5,
  },

  
  RegisterTxt:{
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




  account:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'center',
  },

  txtAccount:{
    fontFamily:'coda',
    fontStyle:'normal',
    fontWeight:'12',
    fontSize:14,
    lineHeight:'23px',
    color:'#6d99c5',
  
  },



  buttonContainer:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:50,
    marginTop:'20px'

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
    marginTop:'10%' 
  },

  GoogleContainer:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'1%',
    paddingHorizontal:50,
    
  },


  GoogleButton:{
    backgroundColor: '#FFFFFF',
    width:'100%',
    padding:15,
    borderRadius:'30px',
    alignItems:'center',
    fontSize:'bold',
    display:'flex',
    flexDirection:'row',
   
  },

  googleButtonText:{
    paddingLeft:"30px"
  },

  OR:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    marginTop:10, 
  },

  ORTxt:{
    fontFamily:'coda',
    fontWeight:400,
    fontSize:25,
    lineHeight:35,
    color:'#353535',
    textAlign:'center',
  },
});



export default Register
