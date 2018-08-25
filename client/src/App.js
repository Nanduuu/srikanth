import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Frame from './Components/Frame';
import 'antd/dist/antd.css';
import WebFont from 'webfontloader';


const fontStyle = {

  fontfamily : "Chinese Quote",
  
  height:"100%"
}

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});


class App extends Component {
  render() {
    return (
      <div className="App" style={fontStyle}>
      	
        <Frame/>
      </div>
    );
  }
}

export default App;
