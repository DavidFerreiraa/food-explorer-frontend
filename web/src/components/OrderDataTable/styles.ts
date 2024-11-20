import styled from "styled-components";
import { IOrderStatus } from "../../interfaces/IOrder";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    box-shadow: inset 0 0 0 .1rem ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.8rem; /* Define o arredondamento geral */
    overflow: hidden; /* Garante que o conteúdo fique dentro das bordas arredondadas */

    thead tr th:first-child {
        border-top-left-radius: 0.8rem; /* Arredonda o canto superior esquerdo */
    }

    thead tr th:last-child {
        border-top-right-radius: 0.8rem; /* Arredonda o canto superior direito */
    }

    tbody tr:last-child td:first-child {
        border-bottom-left-radius: 0.8rem; /* Arredonda o canto inferior esquerdo */
    }

    tbody tr:last-child td:last-child {
        border-bottom-right-radius: 0.8rem; /* Arredonda o canto inferior direito */
    }

    thead th {
        font-family: 'Roboto', 'Poppins', sans-serif;
        font-weight: bold;
        text-align: left;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        padding: 2.1rem 2.4rem;
        border: 0.1rem solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    tbody td {
        font-family: 'Roboto', 'Poppins', sans-serif;
        font-weight: 400;
        text-align: left;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        padding: 1.6rem 2.4rem;
        border: 0.1rem solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
`;

export const StatusIndicator = styled.div<{$status: IOrderStatus}>`
    display: inline-flex;
    align-items: center;
    gap: .8rem;

    margin-right: .7rem;

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ $status, theme }) => {
        switch ($status) {
            case IOrderStatus.Pendente:
                return theme.COLORS.TOMATO_300;
            case IOrderStatus.Pago:
                return theme.COLORS.CARROT_100;
            case IOrderStatus.Preparando:
                return theme.COLORS.CARROT_100;
            case IOrderStatus.Entregue:
                return theme.COLORS.MINT_100;
        }
    }} ;
`;

export const ProductList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        margin-bottom: .4rem;
        font-size: 1.4rem;
        color: #ffffff;
    }
`;

// Container para cada item da tabela no modo responsivo
export const Card = styled.div`
    display: none; // Inicialmente escondido, ativado no modo responsivo
    border: 0.1rem solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.8rem;
    padding: 1.6rem;
    margin-bottom: 1.6rem;

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.6rem;

        .status {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        span {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
        }

        .order-id {
            display: flex;

            > p {
                max-width: 5.6rem;
                text-overflow: ellipsis;
                overflow: hidden;
                font-family: 'Roboto', 'Poppins', sans-serif;
                font-weight: 400;
                text-align: left;
                font-size: 1.4rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
        }

        .order-date {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

    .product-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
        margin-bottom: 0.4rem;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
`;

// Estilos adaptativos para o modo responsivo
export const ResponsiveContainer = styled.div`
    padding: .4rem;
    @media (max-width: 900px) {
        ${Table} {
        display: none; // Esconde a tabela
        }

        ${Card} {
        display: block; // Mostra os cartões
        }
    }
`;

