import './App.css';
import Counter from './Components/Counter';
import Giphy from './Components/Giphy';
import Robohash from './Components/Robohash';
import UserProfile from './Components/UserProfile';
import WindowMeasure from './Components/WindowMeasure';

function App() {
  return (
    <div className="App">
      <Counter/>
      <WindowMeasure/>
      <Giphy/>
      <Robohash/>
      <UserProfile/>
    </div>
  );
}

export default App;
