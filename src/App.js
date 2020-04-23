import React from 'react';
import './App.css';
import Greet from './components/greet.component'
import Welcome from './components/welcome.component'
import Message from './components/message.component'
import Counter from './components/counter.component'
import FuncClick from './components/funcClick.component'
import ClassClick from './components/ClassClick.component'

function App() {
  return (
    <div className="App">
    <FuncClick />
    <ClassClick />
    {/*<Counter />*/}
    {/* props practice */}
      {/*<Greet name='Bilal' skills='programmer' >
        <p>this is childern props</p>
      </Greet>
      <Greet name='Mani' skills='programmer' />
      <Greet name='Wasiq' skills='buissness' />
      <Welcome name='Bilal' skills='programmer' />
      <Message />*/}
    </div>
  );
}

export default App;
