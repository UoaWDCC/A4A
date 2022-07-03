import styled from "styled-components";
export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    &:hover {
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
`

export const Logo = styled.img`
    max-width: 15%;
`