import React, {Component} from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Item from './components/Item';
var color = require('color');


const applicationTheme = getMuiTheme({
    /*Item: {
        color: 'pink',
        backgroundColor:'gray',
        ':hover': {
            background: color('#0074d9').lighten(0.2).hexString()
        }
    }*/
});

render(
    <MuiThemeProvider muiTheme={applicationTheme}>
        <div>
            <Item>I am a themed item item </Item>
            <Item style={{color: 'blue', backgroundColor:'transparent'}}>
                I am a custom styles item
            </Item>
        </div>
    </MuiThemeProvider>, document.getElementById('app'));
