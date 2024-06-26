import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import WelcomePage from './pages/WelcomePage';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import RentalCars from './pages/RentalCars';
import MapSearch from './pages/MapSearch';
import Activity from './pages/Activity';
import Understand from './pages/Understand';
import DriverSide from './pages/DriverSide';
import DriverHome from './pages/DriverHome';
import CabBookings from './pages/CabBookings';
import UserLive from './pages/UserLive';
import Completion from './pages/Completion';
import CompleteRide from './pages/CompleteRide';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/map" element={<MapSearch />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/rent" element={<RentalCars />} />

            <Route path="/activity" element={<Activity />} />
            <Route path="/understand" element={<Understand />} />
            <Route path="/driverInfo" element={<DriverSide />} />
            <Route path="/driverhome" element={<DriverHome />} />
            <Route path="/book" element={<CabBookings />} />
            <Route path="/userlive" element={<UserLive />} />
            <Route path="/completion" element={<Completion />} />
            <Route path='/driveComplete' element={<CompleteRide />} />


        </Routes>
    );
};

export default AppRouter;