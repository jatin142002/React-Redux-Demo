import CakeContainer from './components/CakeContainer.js';
import HooksCakeContainer from './components/HooksCakeContainer.js';
import IceCreamContainer from './components/IceCreamContainer.js';
import NewCakeContainer from './components/NewCakeContainer.js';
import ItemContainer from './components/ItemContainer.js';
import UserContainer from './components/UserContainer.js';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer/>
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
