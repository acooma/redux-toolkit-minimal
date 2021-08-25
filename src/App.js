import React, { useRef, useEffect } from 'react';
import './App.css';
import ContentForm from './components/contentForm';
import Gallery from './components/gallery';
import StickyHeader from './components/stickyHeader';

function App() {
  return (
    <div className="App">
      <StickyHeader />
      <ContentForm />
      <div className="container">
        <Gallery />
      </div>
      {/*junk for testing sticky scroll*/}
      {/* <Gallery />
      <Gallery />
      <Gallery />
      <Gallery /> */}
    </div>
  );
}

export default App;
