import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ShowProduct } from "../pages/ShowProduct";

export function UserRoutes() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/showproduct/:id" element={<ShowProduct/>}/>
            </Routes>
            <Footer/>
        </>
    );
}