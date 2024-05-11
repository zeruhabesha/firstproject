import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OromiyaModal from './component/OromiyaModal';
import ScrollableContent from './component/ScrollableContent';

function App() {
  return (
    <div className="App">
       <OromiyaModal>
        <ScrollableContent />
      </OromiyaModal>
    </div>
  );
}

export default App;
