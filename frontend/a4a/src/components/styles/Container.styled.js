import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: auto;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    height: ${(prop) => prop.height || "auto"};
    background-image: url(${(prop) => prop.bg});
    background-color: ${(prop) => prop.color || "white"};
`

