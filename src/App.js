import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import Items from './Items';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Additem from './Additem';
import Cart from './Cart';
import {persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'
import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import Footer from './Footer';
function App() {
  
  const persistConfig = {

    key:'root',
    storage

  }
  const persistedReducer = persistReducer(persistConfig , rootReducer)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)


  return (
    <div className="App">
      <Provider store={store}>

      <PersistGate persistor={persistor}>

      <Navbar/>
         <BrowserRouter>
         
            <Switch>

                <Route path='/' component={Items} exact/>
                <Route path='/additem' component={Additem} exact/>
                <Route path='/cart' component={Cart} exact/>

            </Switch>

         </BrowserRouter>

         <Footer/>


      </PersistGate>

      

      </Provider>
         
        
    </div>
  );
}

export default App;
