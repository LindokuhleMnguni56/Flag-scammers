import { SafeAreaView, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import RedPart from '../components/topPart'
import Icon  from 'react-native-vector-icons/FontAwesome'

const AddScammer = () => {
  return (
    <SafeAreaView style={styles.container}>
        <RedPart/>
        <View style={styles.midContainer}>
            <View style={styles.text}>
                <Text style={styles.txt}>ADD A SCAMMER</Text>
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
        padding:'50px',
    },

    text:{
        height:'16px',
        alignItems:'center',
        padding:'50px',
        boxShadow: '#ababab 0px 6px 9px -3px'
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
        paddingHorizontal:10,
        display:'flex',
        marginTop:'20%',
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'gray',
        borderBottomWidth:1,
        paddingHorizontal:2,
    },

    textInput:{
        width:'100%',
        paddingLeft:'10px', 
       
    },

    comment:{
      
        
    },

    addComment:{
        padding:'50px',
        height:'20px',
        boxShadow: '#ababab 0px 6px 9px -3px',
        marginTop:'20%',
        backgroundColor:'blue',

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



    
})