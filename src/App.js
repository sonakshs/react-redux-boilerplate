import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { sampleAction } from './actions/sampleAction';

const mapStateToProps = state => ({
  ...state
 })
const mapDispatchToProps = dispatch => ({
  sampleAction: () => dispatch(sampleAction())
 })

class App extends Component {

 sampleAction = (event) => {
  this.props.sampleAction();
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <pre>
          {
            JSON.stringify(this.props)
          }
          </pre>
          <br/>
          <button onClick={this.sampleAction}>Test redux action</button>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
