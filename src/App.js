import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {configureStore,} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './reducers/user-reducer';
import placesReducer from "./reducers/places-reducer";
import placeDetailReducer from "./reducers/place-detail-reducer";
import likesReducer from "./reducers/likes-reducer";
import reviewsReducer from "./reducers/reviews-reducer";
import CurrentUser from "./components/current-user";
import MyMap from "./components/my-map";
import LoginPage from "./components/login";
import ProfilePage from "./components/profile";
import DetailsPage from "./components/details";
import EditProfilePage from "./components/profile/edit-profile";
import ProtectedRoute from "./components/protected-route";

const store = configureStore(
    {
      reducer: {
        userReducer: userReducer,
        placesReducer: placesReducer,
        placeDetailReducer: placeDetailReducer,
        likesReducer: likesReducer,
        reviewsReducer: reviewsReducer
      },
      middleware: getDefaultMiddleware =>
          getDefaultMiddleware({
            serializableCheck: false,
          })
    });

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <CurrentUser>
            <Routes>
              <Route path="/*" element={<MyMap/>}/>
              <Route path="/details/:xid" element={<DetailsPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<LoginPage/>}/>
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage/>
                </ProtectedRoute>
              }/>
              <Route path="/profile/edit-profile" element={
                <ProtectedRoute>
                  <EditProfilePage/>
                </ProtectedRoute>
              }/>
            </Routes>
          </CurrentUser>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
