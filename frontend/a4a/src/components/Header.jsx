import { Nav, Logo, StyledHeader, StyledLink } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Container } from "./styles/Container.styled"

export default function Header() {
    return (
        <StyledHeader>
            <Logo src='./images/a4a.png' alt=''/>
            <Button><StyledLink  to="/">Home</StyledLink ></Button>
            <Button><StyledLink  to="/program">Program</StyledLink></Button>
            <Button><StyledLink  to="/career">Career Pathway</StyledLink></Button>
            <Button><StyledLink  to="/about">Abount Us</StyledLink></Button>
            <Button><StyledLink  to="/contact">Contact Us</StyledLink></Button>
        </StyledHeader>
    )
}