import { useRef, useState } from "react";
import { ICategory } from "../../interfaces/ICategory";
import { ProductCard } from "../ProductCard";
import { CarouselButton, CarouselButtonWrapper, CarouselWrapper, Container, ProdContainer, ProdWrapper, Title } from "./styles";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

interface ICategoryList {
    category: ICategory
}

export function CategoryList({category}: ICategoryList) {
    const prodContainerRef = useRef<HTMLDivElement | null>(null);
    const [currentItem, setCurrentItem] = useState(0);
    const itemsPerPage = 3; // Quantidade de itens a serem visíveis por vez
    const totalItems = category.Products.length;
    // const items = document.querySelectorAll(`.${category.name}`);
    // const maxItems = category.Products.length;
    
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

    return(
        <Container>
            <Title>{category.name}</Title>
            <CarouselWrapper>
                <CarouselButtonWrapper className="left">
                    <CarouselButton onClick={handlePreviousButton}><PiCaretLeftLight size={40}/></CarouselButton>
                </CarouselButtonWrapper>
                <ProdWrapper>
                    <ProdContainer ref={prodContainerRef}>
                        {
                            category.Products.map((products, index) => (
                                <ProductCard className={index === 0?`${category.name} current-${category.name}`: `${category.name}`} key={String(index)} product={products.Product}/>
                            ))
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