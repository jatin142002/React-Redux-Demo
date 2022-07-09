import CakeContainer from './components/CakeContainer.js';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
