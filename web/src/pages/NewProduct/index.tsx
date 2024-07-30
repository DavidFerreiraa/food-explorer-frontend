import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { ButtonContainer, Container, CreateProductBody, Form, FormContainer, IngredientsContainer, TextAreaContainer, Title } from "./styles";
import { Button } from "../../components/Button";
import { RxCaretLeft } from "react-icons/rx";
import { FormField } from "../../components/FormField";
import { FormSelector } from "../../components/FormSelector";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ICategory } from "../../interfaces/ICategory";
import { Label } from "../../components/FormField/styles";
import { Item } from "../../components/Item";
import { FormTextArea } from "../../components/FormTextArea";
import { Footer } from "../../components/Footer";
import { toast } from "react-toastify";
import { useProduct } from "../../hooks/product";

export function NewProduct() {
    const { createProduct } = useProduct();

    const [haveFile, setHaveFile] = useState<"file" | "fileSelected">("file");
    const [plateImage, setPlateImage] = useState<File | undefined>(undefined);
    const [title, setTitle] = useState<string>("");
    const [categorySelected, setCategorySelected] = useState<string>("");
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [newIngredient, setNewIngredient] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [categories, setCategories] = useState<ICategory[] | undefined>(undefined);

    const navigator = useNavigate();

    function handleAddItem(event?: React.KeyboardEvent<HTMLInputElement>) {
        
        if(event?.currentTarget.getAttribute("placeholder") === "Adicionar" && event?.key === "Enter" && newIngredient) {
            event.preventDefault();
            setIngredients(prevState => [...prevState, newIngredient]);
            setNewIngredient("");
        }

        if(event?.type === "click" && newIngredient) {
            setIngredients(prevState => [...prevState, newIngredient]);
            setNewIngredient("");
        }
    }

    function handleRemoveItem(deleted: string) {
        setIngredients(prevState => prevState.filter(item => item !== deleted));
    }

    function handlePlateImage(event: React.ChangeEvent<HTMLInputElement>) {
        if(!event.target.files) {
            return toast.error("No files selected");
        }

        const file = event.target.files[0]
        setHaveFile("fileSelected");
        setPlateImage(file);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const product = {
            title,
            description,
            price,
            ingredients,
            categoryId: categorySelected
        }

        if(!plateImage) {
            return toast.warning("Select an image to continue");
        }

        await createProduct({product: product, file: plateImage}).then((product) => {
            console.log(product)
            if(!product) {
                return;
            }
            navigator("..")
        })
    }

    useEffect(() => {
        api.get("/categories")
        .then((response) => {
            setCategories(response.data)
            setCategorySelected(response.data[0].id);
        })
        .catch((error) => {
            console.log(error)
            toast.error("Can't load all categories");
        })
    }, [])

    return(
        <Container>
            <CreateProductBody>
                <Link to="..">
                    <Button title="Voltar" icon={<RxCaretLeft size={32}/>} onlyText={true} />
                </Link>
                <Title>Adicionar prato</Title>
                <Form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <FormField label="Imagem do prato" htmlFor="image" type="file" placeholder="Selecione imagem" tabIndex={0} fileState={haveFile} onChange={(e) => handlePlateImage(e)}/>
                    <FormField label="Nome" type="text" htmlFor="name" placeholder="Ex.: Salada Ceasar" onChange={(e) => setTitle(e.target.value)}/>
                    <FormSelector data={categories} label="Categoria" onChange={(e) => setCategorySelected(e.target.value)} />
                    <FormContainer>
                        <Label htmlFor="Ingredientes">Ingredientes</Label>
                        <IngredientsContainer>
                            {
                                ingredients.map((ingredient, index) => (
                                    <Item
                                        key={String(index)}
                                        value={ingredient}
                                        onClick={() => handleRemoveItem(ingredient)}
                                    />
                                ))
                            }
                            <Item
                                isNew
                                placeholder="Adicionar"
                                onChange={(event) => setNewIngredient(event.target.value)}
                                value={newIngredient}
                                onClick={handleAddItem}
                                onKeyDown={handleAddItem}
                            />
                        </IngredientsContainer>
                    </FormContainer>
                    <FormField placeholder="R$ 00,00" label="Preço" inputMode="numeric" type="number" htmlFor="price" step="0.01" onChange={(e) => setPrice(e.target.value)}/>
                    <TextAreaContainer>
                        <FormTextArea label="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={(e) => setDescription(e.target.value)}/>
                    </TextAreaContainer>
                    <ButtonContainer>
                        <Button title="Salvar alterações" type="submit"/>
                    </ButtonContainer>
                </Form>
            </CreateProductBody>
            <Footer/>
        </Container>
    );
}