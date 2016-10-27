import React, {Component} from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Item from './components/Item';
var color = require('color');


const applicationTheme = getMuiTheme({
    Item: {
        color: 'yellow',
        transition: 'width 2s, height 2s, background-color 2s, transform 2s',
        ':hover': {
            backgroundColor: color('#0074d9').lighten(0.2).hexString(),
            animation: 'x 3s ease 0s infinite',
        }
    }
});

render(
    <MuiThemeProvider muiTheme={applicationTheme}>
        <div>
            <Item >
                I am an item.
            </Item>
        </div>
    </MuiThemeProvider>, document.getElementById('app'));

// style={{color: 'blue', backgroundColor: 'transparent'}}
