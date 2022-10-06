import React from "react";
import { Component } from "react";
import { Dropdown } from "react-native-material-dropdown";

export default class DropDownList extends Component {
    render() {
        return ({
            this.renderDropdown()
        }
        );
    }
    return(label = 'Some Label'  data = {
        this.props.menuItems
    }
  containerStyle = {
            styles.dropdownStyle
        }
 onChangeText = {
(value) => {
            this.setState({
                selectedValue: value
            }
            );
 }
}
/> );
 }
return (label = 'Some Label'  data = {
    this.props.menuItems
}
containerStyle = {
    styles.dropdownStyle
}
onChangeText = {
        (value) => {
    this.setState({
        selectedValue: value
    }
    );
}
        }
/> );
         }



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