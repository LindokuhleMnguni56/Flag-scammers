import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
          <Text style={styles.usernameTXT}>lindo@gmail.com</Text>
      </View>
      <View style={styles.midContainer}></View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer:{
    backgroundColor:'red',
    height:'50px',
    width:'100%',
    marginBottom:'900px',
    paddingTop:10
  },
  usernameTXT:{
    textAlign:'right',
    paddingRight:60,
  },
  midContainer:{
    backgroundColor:'blue'
  }
});
