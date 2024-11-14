import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewProduct } from "../pages/NewProduct";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ShowProduct } from "../pages/ShowProduct";
import { ContentWrapper, LayoutWrapper } from "./styles";
import { EditProduct } from "../pages/EditProduct";

export function AdminRoutes() {
    return(
        <LayoutWrapper>
            <Header/>
            <ContentWrapper>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/newproduct" element={<NewProduct/>}/>
                    <Route path="/showproduct/:id" element={<ShowProduct/>}/>
                    <Route path="/editproduct/:id" element={<EditProduct/>}/>
                </Routes>
            </ContentWrapper>
            <Footer/>
        </LayoutWrapper>
    );
}