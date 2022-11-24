import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './reducers/user-reducer';
import MyMap from "./components/my-map";
import LoginPage from "./components/login";
import ProfilePage from "./components/profile";

const store = configureStore(
    {
      reducer: {userReducer: userReducer}
    });

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<MyMap/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
