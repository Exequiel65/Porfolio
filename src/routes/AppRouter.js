import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import AllProjects from '../pages/AllProjects';
import Home from '../pages/Home';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<AllProjects />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
