import React, {Component} from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Item from './components/Item';

injectTapEventPlugin();

const clientTheme = {
    Item: {
        color: 'orange',
    }
};

const applicationTheme = getMuiTheme(clientTheme);


class App extends Component {
    render() {
        return (
            <div>
                <Item />
                <Item style={{color: 'blue'}}/>
            </div>
        );
    }
}

render(
    <MuiThemeProvider muiTheme={applicationTheme}>
        <App />
    </MuiThemeProvider>, document.getElementById('app'));
