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
            <S.body>
                <S.view>
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
                </S.view>
            </S.body>
        </div>
    );
}

export default App;
