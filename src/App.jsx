import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import Layout from "./Components/Layout/Layout";
import ScrollToTop from "./Components/ScrollToTop";
// Pages
import Home from "./pages/Home/Home";
import OurStore from "./pages/OurStore/OurStore";
import LegalPages from "./pages/LegalePages/LegalPages";
// Data
import { legal_pages } from "./utils/Data";
// Styles
import "./App.scss";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route exact path="/our-store" element={<OurStore />} />
                        {legal_pages.map(({ title, slug, content }, i) => (
                            <Route
                                exact
                                path={slug}
                                element={
                                    <LegalPages
                                        title={title}
                                        content={content}
                                    />
                                }
                                key={i}
                            />
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
