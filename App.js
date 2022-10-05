import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import Comments from './src/Comments';



const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer >
            <Stack.Navigator initialRouteName='Home'>
                  <Stack.Screen name='Home' options={{title:'Home', headerShown:false}}>
                    {(props)=> <HomeScreen {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='Comments' options={{title:'Comments', headerShown:false}}>
                    {(props)=> <Comments {...props} />}
                  </Stack.Screen>
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
