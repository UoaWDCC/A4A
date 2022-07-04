import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
    position:fixed;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
`

export const Logo = styled.img`
    height: auto;
    max-width: 10%;
    float: left;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    float: right;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;