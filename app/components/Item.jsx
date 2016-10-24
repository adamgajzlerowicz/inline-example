import {render} from 'react-dom'
import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Item extends Component {
    constructor(props, context) {
        super(props, context);
        this.style = Object.assign(this.props.muiTheme.Item, this.props.style)
        console.log(context)
    }
    render() {
        return (
            <div style={this.style}>
              This is my styled component
            </div>
        );
    }
}

export default muiThemeable()(Item);
