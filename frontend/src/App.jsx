import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Video from "./Video";
import Homepage from "./Homepage";
import List from "./List";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/list" element={<List />} />
                <Route path="/watch" element={<Video />} />
                <Route path="/" element={<Homepage />} />
            </Routes>
        </Router>
    );
}