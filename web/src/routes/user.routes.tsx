import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function UserRoutes() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    );
}