import { styled } from "styled-components";

export const Container = styled.div`
    width: fit-content;
    height: 4.8rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    margin-top: 1.5rem;
`;

export const QuantityInnerInput = styled.input`
    width: 4.8rem; /* Agora tem a mesma largura que os botões */
    height: 100%; /* Garante que tenha a mesma altura do container */
    background: none;
    border: none;
    font-family: "Roboto", "Poppins", sans-serif;
    font-weight: bold;
    font-size: 2rem;
    line-height: 160%;
    text-align: center; /* Alinha o texto no centro */
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const QuantityButton = styled.button`
    width: 4.8rem;  /* Garantindo que o botão tenha a mesma largura do input */
    height: 100%;   /* Garante que o botão tenha a mesma altura do input */
    background: none;
    border: none;
    appearance: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer; /* Para garantir que o botão tenha o cursor de ponteiro */
    font-size: 2rem; /* Ajusta o tamanho do ícone dentro do botão */
`;
