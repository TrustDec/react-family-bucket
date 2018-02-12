import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './page/Home';
import { mapStateToProps, mapDispatchToProps } from './action';
import Button from './components/Button';
//定义组件  
class App extends Component {
  render() {
    const { text, onChangeText, onButtonClick, onDivClick } = this.props;
    console.log(this.props)
    return (
      <div>
        <h1 onClick={onChangeText}> {text} </h1>
        <Button title="click me" onPress={onButtonClick}/>
        <Button title="Div" onPress={onDivClick} />
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);