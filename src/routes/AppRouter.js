import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import AllProjects from '../pages/AllProjects';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import ProjectDetail from '../pages/ProjectDetail';


const AppRouter = () => {
    
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<AllProjects />} />
                <Route path='/project/detail/:id' element={<ProjectDetail />} />
                <Route path='/contact' element={<Contact />} />
               
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
