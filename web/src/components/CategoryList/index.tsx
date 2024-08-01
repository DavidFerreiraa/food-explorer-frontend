import { ICategory } from "../../interfaces/ICategory";
import { ProductCard } from "../ProductCard";
import { CarouselButton, CarouselButtonWrapper, CarouselWrapper, Container, ProdContainer, ProdWrapper, Title } from "./styles";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

interface ICategoryList {
    category: ICategory
}

export function CategoryList({category}: ICategoryList) {
    const items = document.querySelectorAll(`.${category.name}`);
    const maxItems = category.Products.length;
    let currentItem = 0;
    
    function handlePreviousButton() {
        currentItem -= 1

        if(currentItem >= maxItems) {
            currentItem = 0;
        }

        if(currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach(item => {
            item.classList.remove(`current-${category.name}`);
            items[currentItem].classList.add(`current-${category.name}`)
        });

        items[currentItem].scrollIntoView({
            inline: "nearest",
            behavior: "smooth",
            block: "nearest",
        });
    }

    function handleNextButton() {
        
        currentItem += 1

        if(currentItem >= maxItems) {
            currentItem = 0;
        }

        if(currentItem < 0) {
            currentItem = maxItems - 1;
        }

        if(currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach(item => {
            item.classList.remove(`current-${category.name}`);
            items[currentItem].classList.add(`current-${category.name}`)
        });

        items[currentItem].scrollIntoView({
            inline: "nearest",
            behavior: "smooth",
            block: "nearest",
        });
    }

    return(
        <Container>
            <Title>{category.name}</Title>
            <CarouselWrapper>
                <CarouselButtonWrapper className="left">
                    <CarouselButton onClick={handlePreviousButton}><PiCaretLeftLight size={40}/></CarouselButton>
                </CarouselButtonWrapper>
                <ProdWrapper>
                    <ProdContainer>
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