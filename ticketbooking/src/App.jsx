import React from "react";
import { Route,Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Favourite from "./pages/Favourite";
import MyBookings from "./pages/MyBookings";
import SeatLayout from "./pages/SeatLayout";
import MovieDetails from './pages/MovieDetails'
import {Toaster} from 'react-hot-toast'
import Footer from "./components/Footer";
const App = () => {
  const isAdminRoute=useLocation().pathname.startsWith('/Admin')
  return (
    <> 
      <Toaster/>
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movie/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/mybookings' element={<MyBookings/>}/>
        <Route path='/seatlayout/:id/:date' element={<SeatLayout/>}/>
      </Routes>
            {!isAdminRoute && <Footer/>}

    </>
  );
};

export default App;
