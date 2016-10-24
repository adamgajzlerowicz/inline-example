import React, {Component} from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Item from './components/Item';

const applicationTheme = getMuiTheme({
    Item: {
        color: 'orange',
    }
});

render(
    <MuiThemeProvider muiTheme={applicationTheme}>

        <div>
            <Item />
            <Item style={{color: 'blue'}}/>
        </div>

    </MuiThemeProvider>, document.getElementById('app'));
