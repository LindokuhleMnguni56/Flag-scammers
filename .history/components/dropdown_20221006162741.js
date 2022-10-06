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

 export defuafunction DropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}