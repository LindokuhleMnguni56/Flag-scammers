import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Login(){
  return (
    <View style={styles.wrapper}>
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
        />
       </View>    
      </View>

      <View style={styles.forget}>
          <TouchableOpacity style={styles.for}>
            <Text style={styles.textForget}>Forget password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.for}>
            <Text style={styles.textForget}>Don't have an account click here</Text>
          </TouchableOpacity>

        </View>

      <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
            >
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

