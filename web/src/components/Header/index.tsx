import { useAuth } from "../../hooks/auth";
import { Container } from "./styles"; // Novos estilos
import LogoAdmin from "../../assets/foodExplorerLogoAdmin.svg";
import Logo from "../../assets/foodExplorerLogo.svg";
import { PiReceiptBold } from "react-icons/pi";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { LogOut } from "../LogOut";
import { Link, useLocation } from "react-router-dom";
import { useOrder } from "../../hooks/order";
import { useEffect, useState } from "react";
import { useProduct } from "../../hooks/product";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export function Header() {
    const { user } = useAuth();
    const location = useLocation();
    const { orders, fetchOrders } = useOrder();
    const { fetchProducts } = useProduct();

    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    async function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        if (event.target.value.length > 0) {
            fetchProducts(event.target.value)
        }
    }

    function handleMenuOpened() {
        setMenuOpened(!menuOpened)
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    useEffect(() => {
        if (location.pathname !== "/menu") {
            setMenuOpened(false);
        }
    }, [location]);

    return(
        <Container className={menuOpened? "menu-opened" : ""}>
            <Link id="burguer" to={menuOpened? "..": "menu"}>
                <Button icon={menuOpened ?  <IoMdClose size={24}/> : <IoMdMenu size={24}/>} onlyText title={menuOpened ? "Menu" : ""} onClick={handleMenuOpened}/>
            </Link>
            
            <Link to="/">
                <img id="logo" src={user?.Role === "ADMIN"? LogoAdmin : Logo } alt="logo"/>
            </Link>

            <SearchInput placeholder="Busque por pratos ou ingredientes" onChange={(e) => {handleSearch(e)}}/>

            <Link className="btn-desktop favorites" to="/favorites">
                <Button title="Meus favoritos" onlyText/>
            </Link>
            <Link className="btn-desktop history" to={user?.Role === "ADMIN"? "/newproduct" : "/orders/history"}>
                <Button title={user?.Role === "ADMIN"? "Novo prato" : "Histórico de pedidos"} onlyText/>
            </Link>
            <Link className="btn-desktop" to={user?.Role === "ADMIN"? "/orders/history" : "/orders"}>
                <Button icon={<PiReceiptBold/>} title={`Pedidos (${orders? orders.length : 0})`}/>
            </Link>

            <LogOut/>

            <Link id="btn-mobile" to="/orders">
                <Button icon={user?.Role === "USER" && <PiReceiptBold size={24}/>} onlyText title=""/>
                {user?.Role === "USER" && <div id="order-count"><span>{orders? orders.length : 0}</span></div>}
            </Link>
        </Container>
    );
}
