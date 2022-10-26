import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'


export default function SpinnerIndicator(){
  return (
    <View>
      <ActivityIndicator size='small' />
    </View>
  )
}



const styles = StyleSheet.create({})