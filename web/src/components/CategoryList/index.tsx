import { ICategory } from "../../interfaces/ICategory";
import { ProductCard } from "../ProductCard";
import { CarouselButton, CarouselButtonWrapper, CarouselWrapper, Container, ProdContainer, ProdWrapper, Title } from "./styles";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

interface ICategoryList {
    category: ICategory
}

export function CategoryList({category}: ICategoryList) {
    const controls = document.querySelectorAll(".control");
    let currentItem = 0;
    const items = document.querySelectorAll(".item");
    const maxItems = category.Products.length;

    controls.forEach(control => {
        control.addEventListener("click", () => {
            const isPrevious = control.classList.contains("previous");
            const isNext = control.classList.contains("next");

            if(isPrevious) {
                currentItem -= 1;
            }

            if(isNext) {
                currentItem += 1;
            }

            if(currentItem >= maxItems) {
                currentItem = 0;
            }

            if(currentItem < 0) {
                currentItem = maxItems - 1;
            }

            items.forEach(item => {
                item.classList.remove("current-item");
            });

            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth",
                block: "nearest",
            });
        })
    })

    return(
        <Container>
            <Title>{category.name}</Title>
            <CarouselWrapper>
                <CarouselButtonWrapper className="left">
                    <CarouselButton className="control previous"><PiCaretLeftLight size={40}/></CarouselButton>
                </CarouselButtonWrapper>
                <ProdWrapper>
                    <ProdContainer>
                        {
                            category.Products.map((products, index) => (
                                <ProductCard className={index === 0?"item current-item": "item"} key={String(index)} product={products.Product}/>
                            ))
                        }
                    </ProdContainer>
                </ProdWrapper>
                <CarouselButtonWrapper className="right">
                    <CarouselButton className="control next"><PiCaretRightLight size={40}/></CarouselButton>
                </CarouselButtonWrapper>
            </CarouselWrapper>
        </Container>
    );
}