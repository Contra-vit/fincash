import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import freedom_header from './img/freedom_header.jpeg'
import LineChart from './Components/Main/LineChart';

function App() {
  return (

    <>
      <div className='wrapper'>
        <div className='app__container'>
          <div className='app__row'>
            <div className='app__element app__header'>
              <div className='app__item'><Header/></div>
            </div>
            <div className='app__element   app__main'>
              <div className='app__item'> 
              <div className="chart">
    </div>
               <Main/></div>
            </div>
            <div className='app__element app__footer'>
              <div className='app__item '> <Footer/></div>
            </div>
          </div>
        </div>
      </div>
      {/* <Header/> */}

    </>

  );
}

export default App;
