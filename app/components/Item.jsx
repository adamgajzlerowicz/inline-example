import {render} from 'react-dom'
import React, {Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';


const defaultTheme = {
    Item: {
        color: 'red'
    }
};

const Item = ({...props, style}) => {

    const elementStyle = Object.assign({}, defaultTheme, props.muiTheme.Item, style);

    return (
        <div style={elementStyle}>
            This is my styled component
        </div>
    );
}


export default muiThemeable()(Item);
