import logo from './logo.svg';
import './App.css';
import Platform from './components/Platform';
import IntegratedSystem from './components/IntegratedSystem';
import SmartHiring from './components/SmartHiring';
import CompitativeLearning from './components/CompitativeLearning';
import Interview from './components/Interview';
import AdvancedSystem from './components/AdvancedSystem';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full bg-gray-400 md:p-3' >
      <div className='grid  md:grid-flow-col   md:space-x-2'>
        <Platform/>
        <IntegratedSystem/>
      </div>

      <div className=' md:flex space-x-2 mt-3'>
        
        <SmartHiring/>
        <CompitativeLearning/>
        <Interview/>
      </div>
      <div className='mt-3'>
        <AdvancedSystem/>
      </div>
      <div className='' >
        <Footer/>
      </div>
      

     
    </div>
  );
}

export default App;
