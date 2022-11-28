import React, { Component } from 'react';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Fortune from './components/Fortune';
import Match from './components/Match';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/fortune" element={<Fortune />}></Route>
                    <Route path="/match" element={<Match />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
