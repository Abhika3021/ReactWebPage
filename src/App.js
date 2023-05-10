import logo from './logo.svg';
import './App.css';
import Cloud from './Cloud.js';
import Sqaure from './Sqaure';
import Heading from './Heading';
import BelowCloud from './BelowCloud';
import BelowBackCloud from './BelowBackClouds';
import Footer from './Footer';

function App() {
  const backgroundColor = '#0080fe';
  return (
    <div style={{ backgroundColor }}>

      <Heading />
      <span className="cloud-first">
        <Cloud />
      </span>
      <span className='cloud-second'> 
        <Cloud />
      </span>
      <span className='cloud-third'>
        <Cloud />
      </span>
      <span className='cloud-fourth'>
      <Cloud />
      </span>
      <Sqaure />
      <BelowBackCloud />
      <BelowCloud />
      <Footer />
      </div>
  );

}

export default App;
