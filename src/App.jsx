import './App.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Hero from './Components/Hero';
import ThreeCards from './Components/ThreeCards';
import SplashCursor from './Components/SplashCursor';
import Features from './Components/Features';
import Partner from './Components/Partner';

function App() {
  return (
    <>
      <div className='relative z-0'>
        {/* <div className='absolute inset-0 circle-background'> */}
          {/* Background circles */}
        {/* </div> */}
        <div className='absolute inset-0 -z-10'>
          {/* <SplashCursor /> */}
        </div>  
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <h1 className='text-center font-bold text-3xl'>
            BREWING REAL COFFEE KIOSK KAFFEE
          </h1>
          <Menu />
          <ThreeCards />
          <Features className="my-20"/>
          <Partner/>
        </div>
      </div>
    </>
  );
}

export default App;
