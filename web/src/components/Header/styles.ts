import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    padding: 2.8rem 12.3rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > img {
        width: 19.7rem;
        height: 3rem;
    }

    > #btn-mobile {
        display: none;
    }

    > #burguer {
        display: none;
    }

    &.menu-opened {
        a {
            display: none;
        }

        #btn-desktop {
            display: none;
        }

        #btn-mobile {
            display: none;
        }
    }

    @media (max-width: 900px) {
        align-items: center;
        justify-content: space-between;
        padding: 5.4rem 5.4rem 2.2rem;


        #logo {
            width: 16rem;
            height: 2%.5;
        }

        > #burguer {
            display: flex;
        }

        > #search {
            display: none;
        }

        > #btn-desktop {
            display: none;
        }

        > #btn-mobile {
            position: relative;
            display: block;

            #order-count {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2rem;
                height: 2rem;
                position: absolute;
                top: 0;
                right: 0;
                font-size: 1rem;
                background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                border-radius: 50%;
                transform: translate(50%, -50%);
                
                font-family: "Poppins", "Roboto", sans-serif;
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 2.4rem;
            }
        }
    }
`;
