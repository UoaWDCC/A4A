import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: auto;
    padding: 0 20px;
    height: ${(prop) => prop.height || "auto"};
    background-image: url(${(prop) => prop.bg});
    background-color: ${(prop) => prop.color || "white"};
`

