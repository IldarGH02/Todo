import React from "react";
import Timer from "../../pages/Timer/Timer";
import Todo from "../../pages/Todo/Todo";
import Surprise from "../../pages/Surprise/Surprise";
import StartPage from "../../pages/StartPage/StartPage";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route
                    path="/surprise"
                    element={<Surprise/>}
                />
                <Route
                    path="/todo"
                    element={<Todo/>}
                />
                <Route
                    path="/timer"
                    element={<Timer/>}
                />
                <Route
                    path="/"
                    element={<StartPage/>}
                />
            </Routes>
        </main>
    )
}

export default Main