
import React from 'react';
import SelectList from "react-native-dropdown-select-list"
 export default function DropDown() {
      const [selected, setSelected] = React.useState("");
      const data = [
        {key:'1', value:'Physical Address'},
        {key:'2', value:'Email Address'},
      ];
      return (
        <SelectList
          data = {data}
          setSelected = {setSelected}
          boxStyles={{
            height:26,
            marginTop:24,
            marginLeft:5,
            borderRadius:4,
            paddingTop:3,
            paddingRight:5,
            paddingLeft:10,
            width:130,
            backgroundColor:'#EDEDED',
    
          }}
          dropdownStyles={{backgroundColor:'#EDEDED'}}
        />
      )
}
