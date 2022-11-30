import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './reducers/user-reducer';
import placesReducer from "./reducers/places-reducer";
import placeDetailReducer from "./reducers/place-detail-reducer";
import MyMap from "./components/my-map";
import LoginPage from "./components/login";
import ProfilePage from "./components/profile";
import DetailsPage from "./components/details";
import EditProfilePage from "./components/profile/edit-profile";

const store = configureStore(
    {
      reducer: {
        userReducer: userReducer,
        placesReducer: placesReducer,
        placeDetailReducer: placeDetailReducer,
      }
    });

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<MyMap/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/profile/edit-profile" element={<EditProfilePage/>}/>
            <Route path="/details/:xid" element={<DetailsPage/>}/>
            <Route path="/register" element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
