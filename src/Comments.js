import {StyleSheet, View, Text, } from 'react-native';
import RedPart from '../components/topPart';



export default function Comments(){
    return(
        <View style={styles.container}>
            <RedPart />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
    },
    
  });