import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ShowProduct } from "../pages/ShowProduct";
import { ContentWrapper, LayoutWrapper } from "./styles";

export function UserRoutes() {
    return(
        <LayoutWrapper>
            <Header/>
            <ContentWrapper>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/showproduct/:id" element={<ShowProduct/>}/>
                </Routes>
            </ContentWrapper>
            <Footer/>
        </LayoutWrapper>
    );
}