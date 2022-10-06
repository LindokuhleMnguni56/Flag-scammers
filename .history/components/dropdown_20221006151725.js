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
import ModalDropdown from 'react-native-modal-dropdown';
export default class DropDownList extends Component{
    render(){
        <View>
            <ModalDropdown options={['option 1', 'option 2']}/>
            <ModalDropdown options={['option 1', 'option 2']}></ModalDropdown>

        </View>

    }
}
