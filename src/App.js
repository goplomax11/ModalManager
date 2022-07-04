import React, { useState } from 'react';
import { ModalManager } from './components/ModalManager';
import './app.sass';

const App = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <button className='button' onClick={() => setModalActive(true)}>Open Modal</button>
      <ModalManager active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
