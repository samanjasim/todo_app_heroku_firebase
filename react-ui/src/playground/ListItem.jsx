import React, {Component} from 'react'

export default class ListItem extends Component {
    
    render() {
        console.log('props= ', this.props);
        return (
            <li>
               {this.props.item.text}
            </li>
        );
    }
    
}