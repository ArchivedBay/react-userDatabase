import React, { Component } from 'react';
import ReactTable from 'react-table'; // import the reactTable lib 
import 'react-table/react-table.css'; // & its styling

class DatabaseFields extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data; //set our data taken from the state in App.js to be our 'data' for use with the lib

        const columns = [ //setup our columns for the lib, Header is what we want to call each property, and accessor is the actual property NAME itself
            { Header: 'First Name', accessor: 'firstName' },
            { Header: 'Last Name', accessor: 'lastName' }
        ]

        return (
            <div>
                <ReactTable
                    data={data} //pass in our data and columns as props to the ReactTable
                    columns={columns}
                    defaultPageSize={this.props.data.length} //set the defaultPageSize to be the length of our props.data array so we don't have a bunch of lines.
                />

            </div>
        );
    }






}




export default DatabaseFields;