import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ShowProduct } from "../pages/ShowProduct";
import { ContentWrapper, LayoutWrapper } from "./styles";
import { Menu } from "../pages/Menu";
import { Orders } from "../pages/Orders";
import { Favorites } from "../pages/Favorites";
import { OrderHistory } from "../pages/OrderHistory";

export function UserRoutes() {
    return(
        <LayoutWrapper>
            <Header/>
            <ContentWrapper>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/showproduct/:id" element={<ShowProduct/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/orders/history" element={<OrderHistory/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                </Routes>
            </ContentWrapper>
            <Footer/>
        </LayoutWrapper>
    );
}