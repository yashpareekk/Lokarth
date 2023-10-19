
import './App.css';
import Header from "./components/header/Header"
import VoteIndia from './components/voteIndia/VoteIndia';
import BlueBox from './components/blueBox/BlueBox';
import WorkFlowChart from './components/workFlowChart/WorkFlowChart';
import Laptops from './components/laptops/Laptops';
import SyncCustomers from './components/syncCustomers/SyncCustomers';
import GetMobileApp from './components/getMobileApp/GetMobileApp';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { useRef } from 'react';

function App() {
  ; 
  
  return (
    <div>
      <Navbar/>
      <Header />
      <VoteIndia />
      <BlueBox/>
      <WorkFlowChart/>
      <Laptops/>
      <SyncCustomers/>
      <GetMobileApp/>
      <Footer/>
    </div>
  );
}

export default App;
