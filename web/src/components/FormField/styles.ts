import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    height: 4.8rem;

    gap: 1.6rem;

    input[type="file"] {
        display: none;
    }

    label.file, label.fileSelected{
        display: none;
    };

    &:has(input[type="file"]) {
        label.file {
            > [data-inputstate="saved"] {
                display: none;
            }

            display: flex;
            align-self: start;
            gap: .8rem;

            font-family: "Poppins", "Roboto", sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.4rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            background-color: ${({ theme }) => theme.COLORS.DARK_800};

            border-radius: .8rem;

            padding: 1.2rem 3.2rem;

            cursor: pointer;
        }

        label.fileSelected {
            > [data-inputstate="upload"] {
                display: none;
            }

            display: flex;
            align-self: start;
            gap: .8rem;

            font-family: "Poppins", "Roboto", sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.4rem;

            color: ${({ theme }) => theme.COLORS.MINT_100};

            background-color: ${({ theme }) => theme.COLORS.DARK_800};

            border-radius: .8rem;

            padding: 1.2rem 3.2rem;

            cursor: pointer;
        }
    }

    input[type=number]{ //remove arrows from input type number in mozzila browser
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button { //remove arrow from input type number in all others browsers
    -webkit-appearance: none;
    margin: 0;
    }
`;

export const Input = styled.input`

    display: flex;

    padding: 1.3rem 1.4rem;

    background: ${({ theme }) => theme.COLORS.DARK_800};
    
    border: ${({ theme }) => `1px solid ${theme.COLORS.DARK_900}`};
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
        font-family: "Roboto", "Poppins", sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;

        color: ${({ theme }) => theme.COLORS.LIGHT_500}
    }

    &:focus {
        border: ${({ theme }) => `1px solid ${theme.COLORS.LIGHT_100}`};
    }
`;

export const Label = styled.label`
    align-self: start;
    font-family: "Roboto", "Poppins", sans-serif;
    font-weight: 400;
    font-size: clamp(1.2rem, 1.6rem, 2rem);
    line-height: 100%;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;