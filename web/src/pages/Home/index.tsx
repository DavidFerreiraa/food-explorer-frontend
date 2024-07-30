import { Container } from "./styles";
import Banner from "../../assets/banner.svg";
import { CategoryList } from "../../components/CategoryList";
import { useCategory } from "../../hooks/category";
import { useEffect } from "react";

export function Home() {
    const { categories, fetchCategories } = useCategory();

    useEffect(() => {
        fetchCategories();
    }, [])

    console.log(categories);
    return(
        <Container>
            <img src={Banner} alt="Sabores inigualáveis - banner"/>
            {
                categories && categories.map((category) => (
                    <CategoryList key={category.id} category={category}/>
                ))
            }
        </Container>
    );
}