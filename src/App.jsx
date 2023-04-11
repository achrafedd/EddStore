import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

import "./App.scss";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/product/:id" element={<Product />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
