import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './reducers/user-reducer';
import placesReducer from "./reducers/places-reducer";
import MyMap from "./components/my-map";
import LoginPage from "./components/login";
import ProfilePage from "./components/profile";
import DetailsPage from "./components/details";

const store = configureStore(
    {
      reducer: {
        userReducer: userReducer,
        placesReducer: placesReducer,
      }
    });

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/*<Route index element={<MyMap/>}/>*/}
            <Route path="/*" element={<MyMap/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/details/:xid" element={<DetailsPage/>}/>
            <Route path="/register" element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
