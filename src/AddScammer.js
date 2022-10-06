import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RedPart from '../components/topPart'

const AddScammer = () => {
  return (
    <SafeAreaView style={styles.container}>
        <RedPart/>
        <View style={styles.midContainer}>
            <View style={styles.txt}>
                <Text>ADD A SCAMMER</Text>
            </View>
        </View>



    </SafeAreaView>
  )
}

export default AddScammer

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    midContainer:{
        flex:12,
    },

    txt:{
        
    },
})