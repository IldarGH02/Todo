import React from "react";
import Timer from "../Pages/Timer/Timer";
import Todo from "../Pages/Todo/Todo";
import Surprise from "../Pages/Surprise/Surprise";
import StartPage from "../Pages/StartPage/StartPage";
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