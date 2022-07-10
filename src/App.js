import CakeContainer from './components/CakeContainer.js';
import HooksCakeContainer from './components/HooksCakeContainer.js';
import IceCreamContainer from './components/IceCreamContainer.js';
import NewCakeContainer from './components/NewCakeContainer.js';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
