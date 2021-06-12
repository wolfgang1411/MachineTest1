import './App.css';
import Store from './redux/store';
import {Provider} from 'react-redux'
import Home from './component/home/home.component';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Home/>
    </div>
    </Provider>
  );
}

export default App;
