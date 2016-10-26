import {render} from 'react-dom'
import React, {Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
var color = require('color');
var Radium = require('radium');


const defaultTheme = {
    Item: {
        color: 'red'
    }
};


var styles = {
    base: {
        color: '#fff',
        transition: 'width 2s, height 2s, background-color 2s, transform 2s',
        ':hover': {
            background: color('#0074d9').lighten(0.2).hexString(),
            animation: 'x 3s ease 0s infinite',
        }
    }
};

const Item = ({...props, style}) => {
    const elementStyle = Object.assign({}, defaultTheme.Item, props.muiTheme.Item, style);
    console.log(elementStyle);
    return (
        <div
            style={[
                styles.base,
                elementStyle
            ]}>
            {props.children}
        </div>
    );
};

export default muiThemeable()(Radium(Item));
