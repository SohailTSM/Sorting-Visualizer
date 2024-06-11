import { RecoilRoot } from 'recoil';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className='flex flex-col bg-slate-100 h-screen'>
        <Navbar />
        <Visualizer />
      </div>
    </RecoilRoot>
  );
}

export default App;
