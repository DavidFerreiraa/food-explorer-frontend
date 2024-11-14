import { Container } from "./styles";
import Banner from "../../assets/banner.svg";
import { CategoryList } from "../../components/CategoryList";
import { useCategory } from "../../hooks/category";
import { useEffect, useState } from "react";
import { ICategory } from "../../interfaces/ICategory";

export function Home() {
    const { fetchCategories } = useCategory();
    const [ categories, setCategories ] = useState<ICategory[] | undefined>(undefined);

    useEffect(() => {
        fetchCategories().then((categories) => {
            setCategories(categories);
        });
    }, [])

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