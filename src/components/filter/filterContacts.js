import React, { Component } from "react";
import { Filter, FilterContact } from "./filterContacts.styled";
// import PropTypes from 'prop-types';



export class FilterContacts extends Component{

    state = {
        value: '',
    }

    onChangeFilter = (event) => {
        this.props.filterContactsByName(event.currentTarget.value)
    }

    render() {
       
        return (  <FilterContact> Find contact by name
            <Filter type="text"
                value={this.props.value}
            onChange={this.onChangeFilter}></Filter>
        </FilterContact>
    )
    }

  
};

// FilterContacts.prototype = {

//     value: PropTypes.string,
//     onChangeFilter: PropTypes.func,
// }

  
