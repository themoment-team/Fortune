import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loading, NotFound, Fortune, Match, MatchResult, Main } from './Pages';
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
                            <Route
                                path="/match/result"
                                element={<MatchResult />}
                            ></Route>
                            <Route path="*" element={<NotFound />}></Route>
                            <Route
                                path="/loading"
                                element={<Loading />}
                            ></Route>
                        </Routes>
                    </BrowserRouter>
                </S.View>
            </S.Body>
        </div>
    );
}

export default App;
