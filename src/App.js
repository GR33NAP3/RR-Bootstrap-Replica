import './App.css';
import NavBar from "./TopBar"
import Background from './BackgroundImg';
import StoreListings from './StoreListings';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
