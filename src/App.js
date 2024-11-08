import './App.css';
import BasicButtons from './grid';
import AppBar from './appbar';
import TemporaryDrawer from './drawer';
import Photopp from './image';

function App() {
  return (
    <div>
      <AppBar /> 
      <TemporaryDrawer />
      <BasicButtons />
      <Photopp />
    </div>
  );
}

export default App;
