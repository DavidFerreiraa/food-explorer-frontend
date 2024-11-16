import { styled } from "styled-components";

export const Container = styled.div<{$showproduct: boolean}>`
    width: fit-content;
    height: 4.8rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    margin-top: 1.5rem;

    @media (max-width: 900px) {
        width: 100%;
        height: fit-content;
        flex-direction: column;

        /* Dynamically change flex-direction based on $showproduct prop */
        ${({ $showproduct }) => $showproduct &&
            'flex-direction: row;'
        }

        button {
            width: 100%;
            height: 3.2rem;
            /* Dynamically change flex-direction based on $showproduct prop */
            ${({ $showproduct }) => $showproduct &&
                'height: fit-content; padding-top: 1.1rem; padding-bottom: 1.1rem;'
            }
        }
    }
`;

export const QuantityWrapper = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;
`;

export const QuantityInnerInput = styled.input<{$showproduct: boolean}>`
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

    @media (max-width: 900px) {
        font-size: 1.6rem;
        font-weight: 400;

        /* Dynamically change flex-direction based on $showproduct prop */
        ${({ $showproduct }) => $showproduct &&
            'font-size: 2.2rem; font-weight: bold;'
        }
    }
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

    @media (max-width: 900px) {
        svg {
            width: 1.8rem;
            height: 1.8rem;
        }
    }
`;
