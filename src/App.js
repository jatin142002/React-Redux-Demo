import CakeContainer from './components/CakeContainer.js';
import HooksCakeContainer from './components/HooksCakeContainer.js';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
