import React from "react";
import { Component } from "react";
import { Dropdown } from "react-native-material-dropdown";

class DropDownList extends Component{
    render(){
        let data =[{
            value:'Physical',
        }, {
            value:'Email',
        }];

        return(
            <Dropdown 
                label="Select Type"
                data={data} 
            />
        );
    }
}