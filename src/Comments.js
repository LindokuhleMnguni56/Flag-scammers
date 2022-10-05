import {StyleSheet,SafeAreaView, View,Text } from 'react-native';
import RedPart from '../components/topPart';



export default function Comments(){
    return(
        <SafeAreaView style={styles.container}>
            <RedPart />
            <View style={styles.midContainer}>
                <View style={styles.card}>
                        <View style={styles.dates}>
                            <Text></Text>
                        </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
    },
    midContainer:{
        flex:12,
    },
    bottomContainer:{
        flex:2.5,
        backgroundColor:'#000000',
        height:'20%',
        width:'100%',
      },
    

    
  });