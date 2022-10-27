import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity,Picker, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { db, auth } from './config/firebase';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import Top from '../components/secureTopParts';
import RedPart2 from '../components/secureTopParts';
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment/moment';
import RedPart from '../components/topPart';
import ConfirmationPopup from '../components/modal';

const AddScammer = ({navigation}) => {

    const [visible, setVisible] = useState(false);

    const moment = require('moment')
    const time = moment() // moment(new Date()).format("YYYY-MM-DD ")
    
    const timestamp = time.format("YYYY-MM-DD")
       
    const [mail, setMail] = useState('');
    const [comment, setComment] = useState('');

    const itemRef = collection(db, "flag");

    const user = auth.currentUser

    const [selectedAddress, setSelectedAddress] = useState('');
    const [addresses] = useState([
        'Email Address',
        'Physical Address'
    ]
    );
    const addflag = async () => {
        
        if (user!=null){
        //add to flag
        // const docRef = await addDoc(itemRef,{address:mail ,userId:user.uid,addressType:selectedAddress, date:timestamp,comment:{[uid]:comment  }})
    
        // let data = await getDocs(commentRef);

        console.log(user);

       if (mail !== '' ){

        if(comment !== ''){

            const docRef = await addDoc(itemRef, {
                address: mail,
                addressType: selectedAddress,
                date: timestamp, 
                comments :[ {[user.displayName]:comment}],
                  lik
                        // uid:user.uid,
                        // commentText:comment
                          
                        // commentText:comment
    
                        
                
            })
            setVisible(true);
            
        }

        
        console.log(mail)
        
        

       }else{

        console.log(' null')
        setVisible(false);
       }

       
        
    }

        //  await addDoc(commentRef,{comment:comment,flagId:docRef.id})
        // await addDoc(commentRef,{address:mail ,userId:user.uid,flagId:docRef.flag.id,comment:comment})
    
        //add to comments

        // }
       
    }

    const close = () =>{
        setVisible(false)
        navigation.navigate('Home')
    }



    return (
        <SafeAreaView style={styles.container}>
         {user != null ?(<RedPart2 />):(<RedPart />)}
            <View style={styles.midContainer}>
                <View style={styles.text}>
                    <Text style={styles.txt}>ADD A SCAMMER</Text>
                </View>
                <View style={styles.hhh}>

                    <View style={styles.selectView}>
                        
                        <Picker
                            style={[styles.dropdownPick, { marginTop: '25px', marginVertical: 10, backgroundColor: '' }]}
                            selectedValue={selectedAddress}
                            onValueChange={(itemVal) => {
                                setSelectedAddress(itemVal);
                                console.log({ selectedAddress });

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
                        <TextInput onChangeText={mail => setMail(mail)}
                            placeholder='Enter Scam Address'
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.comment}>
                        <TextInput onChangeText={comment => setComment(comment)}
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
                <View>
                    <ConfirmationPopup visible={visible}>
                    <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
                        Flag Added
                    </Text>
                    <TouchableOpacity onPress={() =>close()}><Text>OK</Text></TouchableOpacity>             
                    </ConfirmationPopup>
                </View>


            </View>
        </SafeAreaView>
    )
}

export default AddScammer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: '100%',
        width: '100%'
    },
    midContainer: {
        flex: 12,
        padding: '20px',


    },

    text: {
        height: '5px',
        alignItems: 'center',
        padding: '35px',
        boxShadow: '#ababab 0px 6px 9px -3px',

    },

    selectView: {
        display: 'flex',
        flexDirection: 'row',
        width: '55%',

    },
    txt: {
        fontFamily: 'coda',
        fontSize: 'normal',
        fontWeight: 400,
        fontSize: '20px',
        color: 'rgba(0, 0, 0, 0.8)',
    },

    txtInput: {
        width: '100%',
        height: 44,
        paddingHorizontal: 20,
        display: 'flex',
        marginTop: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,




    },

    textInput: {
        width: '100%',
        paddingLeft: '10px',

    },


    addComment: {
        padding: '20px',
        height: '100px',
        boxShadow: '#ababab 0px 6px 9px -3px',
        marginTop: '10%',
        borderRadius: '10px',
        borderColor: 'grey'


    },

    buttonContainer: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        paddingHorizontal: 50
    },

    button: {
        backgroundColor: '#EA4335',
        width: '100%',
        padding: 15,
        borderRadius: '27px',
        alignItems: 'center',
        fontSize: 'bold'

    },

    buttonText: {
        color: 'white',
        fontSize: 'bold'
    },

    bottomContainer: {
        backgroundColor: 'black',
        marginTop: '10%',
    },

    hhh: {
        paddingHorizontal: '25px',
        marginTop: '100px'
    },
    dropdownPick:{
        height: 25,
        width:130,
        border:'1px solid grey',
        borderRadius: 4,
        boxShadow: '#ababab 0px 6px 9px -3px;',
        backgroundColor: '#EDEDED',
        paddingLeft: '2%',
        fontSize:12,
    },




})