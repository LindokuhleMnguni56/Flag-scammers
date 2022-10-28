import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import Comments from './src/Comments';
import Register from './src/Register'
import Login from './src/Login';
import Pro  from './src/pro';
import NotFound from './src/NotFound';
import AddScammer from './src/AddScammer';
// import RedPart2 from './components/secureTopParts';
// import SpinnerIndicator from './components/spinner';
import Forgot from './src/forgotPassword';
import RedPart from './components/topPart';
import EditProfileScreen from './src/editProfile';



const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
        ?
                  <Stack.Screen name='editProfile' options={{title:'editProfile', headerShown:false}}>
                    {(props)=> <EditProfileScreen {...props} />}
                  </Stack.Screen>
                  
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
