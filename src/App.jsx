import { RecoilRoot } from 'recoil';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';

function App() {
  return (
    <RecoilRoot>
      <Navbar />
      <Visualizer />
    </RecoilRoot>
  );
}

export default App;
