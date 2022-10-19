import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Picker } from 'react-native-web'
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const DropdownPicker = () => {

    const [selectedAddress, setSelectedAddress] = useState('Select Address');
    const [addresses] = useState([
        'Email Address',
        'Physical Address'
    ].sort()
    );
    <Picker
        style={{marginVertical:10}}
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
    
    return (
        <View style={styles.container}>
            
        </View>
    )
}

export default DropdownPicker

    const styles = StyleSheet.create({
        container:{
            flex:1,
        
        },  
})