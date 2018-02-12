import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import IncreaseDecrease from './DocDemo/IncreaseDecrease'
import { mapStateToPropsOne, mapDispatchToPropsOne } from '../action';

class Home extends Component {
    render(){
        const { text="", onButtonClick } = this.props;
        console.log(text)
        return(
            <Button title={`点我${text}`} onPress={onButtonClick} />
        );
    }
}
export default connect(mapStateToPropsOne, mapDispatchToPropsOne)(Home);