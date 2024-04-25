import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Content from './components/Content'
function App() {
  return (
    <>
      <div>
        <Navigation />
        <Content />
      </div>
    </>
  );
};

export default App
