import { Link, useNavigate, useParams } from "react-router-dom";
import { ButtonContainer, Container, CreateProductBody, Form, FormContainer, IngredientsContainer, TextAreaContainer, Title } from "../NewProduct/styles";
import { Button } from "../../components/Button";
import { RxCaretLeft } from "react-icons/rx";
import { FormField } from "../../components/FormField";
import { FormSelector } from "../../components/FormSelector";
import { useEffect, useState } from "react";
import { Label } from "../../components/FormField/styles";
import { Item } from "../../components/Item";
import { FormTextArea } from "../../components/FormTextArea";
import { toast } from "react-toastify";
import { useProduct } from "../../hooks/product";
import { useCategory } from "../../hooks/category";
import { RiLoader3Fill } from "react-icons/ri";
import { ICategory } from "../../interfaces/ICategory";
import { IProduct } from "../../interfaces/IProduct";

export function EditProduct() {
    const { updateProduct, showProduct, deleteProduct } = useProduct();
    const { fetchCategories } = useCategory();
    const { id } = useParams();
    const navigate = useNavigate();

    // Loading state
    const [loading, setLoading] = useState(true);

    // Set the states to the form fields
    const [haveFile, setHaveFile] = useState<"file" | "fileSelected">("file");
    const [initialProductData, setInitialProductData] = useState<IProduct | undefined>(undefined)
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [plateImage, setPlateImage] = useState<File | undefined>(undefined);
    const [title, setTitle] = useState<string>("");
    const [categories, setCategories] = useState<ICategory[] | undefined>(undefined);
    const [categorySelected, setCategorySelected] = useState<string>("");
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [newIngredient, setNewIngredient] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    // Fill form 
    useEffect(() => {
        if (id) {
            // Load categories and products
            Promise.all([fetchCategories(), showProduct(id)]).then(([categories, product]) => {
                // Fill the states with the data loaded
                if (product) {
                    setTitle(product.title);
                    setHaveFile("fileSelected");
                    setIngredients(product.Ingredients.map((ingredient) => ingredient.name));
                    setPrice(product.price);
                    setDescription(product.description);
                    setInitialProductData(product);
                }

                if (categories) {
                    // Set the category of the product as a selected category
                    setCategories(categories);
                }

                if (categories && product) {
                    const selectedCategory = categories.find((category) => product.Categories[0].categoryId === category.id)?.id || ""
                    setCategorySelected(selectedCategory);
                }

                // Update the loading state
                setLoading(false);
            }).catch((error) => {
                console.error("Erro ao carregar os dados:", error);
                setLoading(false);
            });
        }
    }, []);

    useEffect(() => {
        let formChanged = false;
        if (!initialProductData) {
            return;
        }

        if (title !== initialProductData.title) {
            formChanged = true;
        }

        if (plateImage) {
            formChanged = true;
        }

        if (JSON.stringify(ingredients) !== JSON.stringify(initialProductData.Ingredients.map((ingredient) => ingredient.name))) {
            formChanged = true;
        }

        if (price !== initialProductData.price) {
            formChanged = true;
        }

        if (description !== initialProductData.description) {
            formChanged = true;
        }
        if (categorySelected !== initialProductData.Categories[0].categoryId) {
            formChanged = true;
        }

        setIsFormChanged(formChanged);
    }, [title, price, ingredients, description, categorySelected, plateImage])

    // Function that deal with new items addeds
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

    // Function to deal with the items removed
    function handleRemoveItem(deleted: string) {
        setIngredients(prevState => prevState.filter(item => item !== deleted));
    }

    // Function to deal with the plate images added
    function handlePlateImage(event: React.ChangeEvent<HTMLInputElement>) {
        if(!event.target.files) {
            return;
        }

        const file = event.target.files[0];
        setHaveFile("fileSelected");
        setPlateImage(file);
    }

    // Function to send the form
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const productData = {
            title,
            description,
            price,
            ingredients,
            categoryId: categorySelected
        };

        if (!id) {
            return toast.error("Id do produto não fornecido nos parâmetros")
        }

        await updateProduct({ product: productData, file: plateImage || undefined }, id).then((product) => {
            toast.success("Produto atualizado com sucesso!");
            navigate("..");
        }).catch((error) => {
            toast.error("Erro ao criar o produto.");
            console.error(error);
        });
    }

    async function handleDeleteProduct() {
        if (!id) {
            return toast.error("Id do produto não fornecido nos parâmetros")
        }

        await deleteProduct(id).then(() => {
            toast.success("Produto excluído com sucesso!");
            navigate("..");
        }).catch((error) => {
            toast.error("Erro ao excluir o produto.");
            console.error(error);
        });
    }

    // Show a loader while the page is loading
    if (loading) {
        return <RiLoader3Fill/>;
    }

    return (
        <Container>
            <CreateProductBody>
                <Link to="..">
                    <Button title="Voltar" icon={<RxCaretLeft size={32} />} onlyText={true} />
                </Link>
                <Title>Editar prato</Title>
                <Form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <FormField label="Imagem do prato" htmlFor="image" type="file" placeholder="Selecione imagem" tabIndex={0} fileState={haveFile} onChange={(e) => handlePlateImage(e)} />
                    <FormField value={title} label="Nome" type="text" htmlFor="name" placeholder="Ex.: Salada Ceasar" onChange={(e) => setTitle(e.target.value)} />
                    <FormSelector value={categorySelected} data={categories} label="Categoria" onChange={(e) => setCategorySelected(e.target.value)} />
                    <FormContainer>
                        <Label htmlFor="Ingredientes">Ingredientes</Label>
                        <IngredientsContainer>
                            {ingredients.map((ingredient, index) => (
                                <Item key={String(index)} value={ingredient} onClick={() => handleRemoveItem(ingredient)} />
                            ))}
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
                    <FormField value={price} placeholder="R$ 00,00" label="Preço" inputMode="numeric" type="number" htmlFor="price" step="0.01" onChange={(e) => setPrice(e.target.value)} />
                    <TextAreaContainer>
                        <FormTextArea value={description} label="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={(e) => setDescription(e.target.value)} />
                    </TextAreaContainer>
                    <ButtonContainer>
                        <Button title="Excluir prato" type="button" secondary onClick={handleDeleteProduct} />
                        <Button title="Salvar alterações" type="submit" disabled={!isFormChanged} />
                    </ButtonContainer>
                </Form>
            </CreateProductBody>
        </Container>
    );
}
