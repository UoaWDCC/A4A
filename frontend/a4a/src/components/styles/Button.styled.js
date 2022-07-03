import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    border: none;
    font-size: 16px;
    font-weight: 700;
    margin: 20px 30px;
    background-color: Transparent;
    color: ${({color}) => color || '#333'};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98)
    }
`