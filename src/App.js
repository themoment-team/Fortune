import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "./Pages";
import * as S from "./style";
import * as C from "./components";

function App() {
  return (
    <div className="App">
      <S.Body>
        <S.View>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<P.Main />}></Route>
              <Route path="/fortune" element={<P.Fortune />}></Route>
              <Route path="/match" element={<P.Match />}></Route>
              <Route path="/match/result" element={<P.MatchResult />}></Route>
              <Route path="*" element={<P.NotFound />}></Route>
              <Route path="/loading" element={<C.Loading />}></Route>
            </Routes>
          </BrowserRouter>
        </S.View>
      </S.Body>
    </div>
  );
}

export default App;
