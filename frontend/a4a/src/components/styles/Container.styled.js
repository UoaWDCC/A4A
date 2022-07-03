import styled from "styled-components"

export const Container = styled.div`
    width: 1500px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    height: ${(prop) => prop.height || "auto"};
    background-image: url(${(prop) => prop.bg});
`

