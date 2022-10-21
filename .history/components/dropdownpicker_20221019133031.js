import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Picker } from 'react-native-web'
import {}

const DropdownPicker = () => {

    const [selectedAddress, setSelectedAddress] = useState('');
    const [addresses] = useState([
        'Email Address',
        'Physical Address'
    ].sort()
    );
    
    
    return (
        <Picker
            style={[styles.dropdownPick, {marginTop: '25px',marginVertical:10}]}
            selectedValue = {selectedAddress}
            onValueChange = {( itemVal) => {
                setSelectedAddress(itemVal); 
            }}
            >
            {
                addresses.map((a) => (
                    <Picker.Item label={a} value={a} />
                ))
            }
        </Picker>
    )
}

export default DropdownPicker

    const styles = StyleSheet.create({
        dropdownPick:{
                height: 25,
                width:120,
                borderColor: 'grey',
                border:'1px solid black',
                borderRadius: 4,
                paddingLeft:10,
                boxShadow: '#ababab 0px 6px 9px -3px;',
                backgroundColor: '#EDEDED',
                paddingLeft: '2%',
                fontSize:12,
        },
    })