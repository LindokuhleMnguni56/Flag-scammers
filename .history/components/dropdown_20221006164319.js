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

import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import { StyleSheet } from 'react-native-web';
 export default function DropDown() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] =React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Email Address', value: 'Email Address'},
    {label: 'Physical Address', value: 'Physical Address'}
  ]);

  return (
    <DropDownPicker style={styles.droplist}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}

const styles = StyleSheet.create({
    droplist: {
        paddingLeft: '2%',
        marginLeft: 5,
        width: '80%',
        height:''
      },

})