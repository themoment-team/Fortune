import React, { Component } from 'react';
import Main from './components/MainPage/Main';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFoundPage/NotFound';
import Fortune from './components/FortunePage/Fortune';
import Match from './components/MatchPage/Match';
import * as S from './style';

function App() {
    return (
        <div className="App">
            <S.Body>
                <S.View>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Main />}></Route>
                            <Route
                                path="/fortune"
                                element={<Fortune />}
                            ></Route>
                            <Route path="/match" element={<Match />}></Route>
                            <Route path="*" element={<NotFound />}></Route>
                        </Routes>
                    </BrowserRouter>
                </S.View>
            </S.Body>
        </div>
    );
}

export default App;
