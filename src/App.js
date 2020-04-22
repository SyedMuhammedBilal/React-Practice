import React from 'react';
import './App.css';
import Greet from './components/greet.component'
import Welcome from './components/welcome.component'
import Message from './components/message.component'

function App() {
  return (
    <div className="App">
    {/* props practice */}
      {/*<Greet name='Bilal' skills='programmer' >
        <p>this is childern props</p>
      </Greet>
      <Greet name='Mani' skills='programmer' />
      <Greet name='Wasiq' skills='buissness' />
      <Welcome name='Bilal' skills='programmer' />*/}
      <Message />
    </div>
  );
}

export default App;
