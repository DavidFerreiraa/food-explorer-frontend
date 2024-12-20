import { useEffect, useRef, useState } from "react";
import { ICategory } from "../../interfaces/ICategory";
import { ProductCard } from "../ProductCard";
import { CarouselButton, CarouselButtonWrapper, CarouselWrapper, Container, ProdContainer, ProdWrapper, Title } from "./styles";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import { useProduct } from "../../hooks/product";

interface ICategoryList {
    category: ICategory
}

export function CategoryList({category}: ICategoryList) {
    const { products } = useProduct();
    const prodContainerRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentItem, setCurrentItem] = useState(0);
    const itemsPerPage = 3; // Quantidade de itens a serem visíveis por vez
    const totalItems = category.Products.length;
    
    // Função para rolar para o item anterior
    const handlePreviousButton = () => {
        const newIndex = currentItem - 1 < 0 ? totalItems - 1 : currentItem - 1;
        setCurrentItem(newIndex);
        if (prodContainerRef.current) {
            const newScrollPosition = newIndex * (prodContainerRef.current.offsetWidth / itemsPerPage);
            prodContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: "smooth",
            });
        }
    };

    // Função para rolar para o próximo item
    const handleNextButton = () => {
        const newIndex = (currentItem + 1) % totalItems;
        setCurrentItem(newIndex);
        if (prodContainerRef.current) {
            const newScrollPosition = newIndex * (prodContainerRef.current.offsetWidth / itemsPerPage);
            prodContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: "smooth",
            });
        }
    };

    function handleProducts() {
        if (products) {
            return products.map((product, index) => {
                const productInCategory = category.Products.find((categoryProducts) => categoryProducts.Product.id === product.id)

                if (productInCategory) {
                    return (
                    <ProductCard className={index === 0?`${category.name} current-${category.name}`: `${category.name}`} key={String(index)} product={product}/>)
                }
                return null
            })
        }
        return category.Products.map((products, index) => (
            <ProductCard className={index === 0?`${category.name} current-${category.name}`: `${category.name}`} key={String(index)} product={products.Product}/>
        ))
    }

    useEffect(() => {
        // Verifica se o prodContainer está vazio e oculta o Container se necessário
        if (prodContainerRef.current && !prodContainerRef.current.hasChildNodes()) {
            if (containerRef.current) {
                containerRef.current.style.display = 'none';
            }
        }
        else if (containerRef.current) {
            containerRef.current.style.display = 'flex';
        }
    }, [products]);

    return(
        <Container id="container" ref={containerRef}>
            <Title>{category.name}</Title>
            <CarouselWrapper>
                <CarouselButtonWrapper className="left">
                    <CarouselButton onClick={handlePreviousButton}><PiCaretLeftLight size={40}/></CarouselButton>
                </CarouselButtonWrapper>
                <ProdWrapper>
                    <ProdContainer ref={prodContainerRef}>
                        {
                            handleProducts()
                        }
                    </ProdContainer>
                </ProdWrapper>
                <CarouselButtonWrapper className="right">
                    <CarouselButton onClick={handleNextButton}><PiCaretRightLight size={40}/></CarouselButton>
                </CarouselButtonWrapper>
            </CarouselWrapper>
        </Container>
    );
}