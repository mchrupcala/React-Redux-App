import React from 'react';
import './App.css';
import { connect } from 'react-redux';


function App() {
  return (
    <div className="App">
      <h2>Hi from App!</h2>
    </div>
  );
}

export default connect(
  null, {}
)(App);