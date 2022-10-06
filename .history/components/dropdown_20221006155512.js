// import React from "react";
// import { Component } from "react";
// import { Dropdown } from "react-native-material-dropdown";

// export default class DropDownList extends Component{
//     render(){
//         let data =[{
//             value:'Physical',
//         }, {
//             value:'Email',
//         }];

//         return(
//             <Dropdown 
//                 label="Select Type"
//                 data={data} 
//             />
//         );
//     }
// }

import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MyComponent;
