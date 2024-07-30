import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewProduct } from "../pages/NewProduct";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function AdminRoutes() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/newproduct" element={<NewProduct/>}/>
            </Routes>
            <Footer/>
        </>
    );
}