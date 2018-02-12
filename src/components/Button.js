import React, { Component } from 'react';

export default class Button extends Component {
    render(){
        return(
            <a href="#" className="button button-blue" onClick={this.props.onPress}>
                <span>{this.props.title}</span>
            </a>
        );
    }
}