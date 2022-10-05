import { View, Text,StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from './config/firebase';


const Register = () => {
    const [passSecured,setpassSecured]=React.useState(true);
    const [uid,setUid]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [password,setPass]=React.useState('');
    const [confirmPassword,setConfirmedPassword]=React.useState('');


  const register = ()=>{

    createUserWithEmailAndPassword(auth, email, password).then(async(userCredential)=>{

      const displayName = uid;
      setUser(()=>({...userCredential.user}));

       updateProfile(auth.currentUser, {displayName:displayName}).then().catch();
      alert(displayName+ "successfull")
      navigation.push('Home')
  }).catch((error)=>{
      alert(error);
      console.log(error)
  })
  
}


  return (

    <View style={styles.wrapper}>
    <Text style={styles.header}>Welcome </Text>
    <Text style={styles.text}>Register</Text>

    <View style={styles.inputContainer}>
      <TextInput
      placeholder='Username'
      style={styles.input}
      onChange={(e)=>setUid(e.target)}
      />

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

      <TextInput
        placeholder='Confirm Password'
        style={styles.input}
        onChange={(e)=>setConfirmedPassword(e.target)}
      
      />

      


    </View>


    
    <View style={styles.forget}>
        <TouchableOpacity style={styles.for}
        
        >
          <Text style={styles.textget}>Forget password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.for}
        onPress={() => navigation.push('Login')}
        >
          <Text style={styles.textget}>Don't have an account click here</Text>
        </TouchableOpacity>

      </View>

    <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.button}
              onPress={register}
          >
              <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text></Text>

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

  textget:{
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
    color:'white',
    fontSize:'bold'
  },

  bottomContainer:{
    backgroundColor:'black',
    marginTop:'10%'
    
  }
});



export default Register
