import {render} from 'react-dom'
import React, {Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
var color = require('color');
var Radium = require('radium');

var styles = {
    color: '#000',
    backgroundColor: 'gray',
    padding: 20,
    textAlign:'center'
};

const Item = ({...props}) => {
    const elementStyle = Object.assign({}, styles, props.muiTheme.Item, props.style);
    return (
        <div
            style={
                elementStyle
            }>
            {props.children}
        </div>
    );
};

export default muiThemeable()(Radium(Item));
