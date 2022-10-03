import React from 'react';
import Portfolio from './components/Portfolio';
import Background from './images/Sea.mp4'




function App() {
  return (
    <div>
      <video autoPlay loop muted id='video' style={{ position: 'fixed', zIndex: -1, fit: 'fill', borderRadius:'16px', }}>
        <source src={Background} type='video/mp4'></source>
      </video>
      <Portfolio/>
    </div>
  );
}

export default App;
