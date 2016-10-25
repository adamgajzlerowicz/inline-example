import React, {Component} from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Item from './components/Item';

const applicationTheme = getMuiTheme({
    Item: {
        color: 'pink',
        backgroundColor:'gray'
    }
});

render(
    <MuiThemeProvider muiTheme={applicationTheme}>

        <div>
            <Item />
            <Item style={{color: 'blue', backgroundColor:'transparent'}}/>
        </div>

    </MuiThemeProvider>, document.getElementById('app'));
