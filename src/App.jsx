import React from 'react';
import { WiredTabs, WiredTab } from 'react-wired-elements';
import './App.css'
import Generator from './Generator';

const App = () => {
  return (
    <WiredTabs elevation="5" initialSelected="Generate" className='container'>
      <WiredTab name='Generate'>
        <Generator />
      </WiredTab>
      <WiredTab name='Parse'>TODO</WiredTab>
    </WiredTabs>
  );
};

export default App
