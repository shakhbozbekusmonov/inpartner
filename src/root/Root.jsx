import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Register from "../pages/Register";

const Root = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' index element={<Home/>} />
                <Route path='/category' element={<h1>Category</h1>} />
                <Route path='/about' element={<h1>About</h1>} />
                <Route path='/register' element={<Register/>} />
                <Route path='*' element={<h1>404</h1>} />
            </Routes>
        </>
    );
};

export default Root;
