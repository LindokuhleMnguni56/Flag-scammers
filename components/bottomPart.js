import { StyleSheet,SafeAreaView,View, } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function BottomPart() {
    return (
      <SafeAreaView>
        <View style={styles.bottomContainer} >
           
        </View>
       
        </SafeAreaView>
        
    );
  }
  
  const styles = StyleSheet.create({
    bottomContainer:{
        flex:2.5,
        backgroundColor:'#000000',
        height:'20%',
        width:'100%',
      },

  });