import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Layout, ScrollToTop } from "./Components";
// Pages
import {
    Home,
    Cart,
    Login,
    Register,
    LegalPages,
    OurStore,
    SingleProduct,
    BlogsPage,
} from "./pages";
// Data
import { Data } from "./Constants";
// Styles
import "./App.scss";

const App = () => {
    const { productsItems, legal_pages } = Data;
    return (
        <div className="app">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route exact path="/our-store" element={<OurStore />} />
                        <Route exact path="/blogs" element={<BlogsPage />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route
                            path="/product/:id"
                            element={
                                <SingleProduct product={productsItems[0]} />
                            }
                        />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
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
