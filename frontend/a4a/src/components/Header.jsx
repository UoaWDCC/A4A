import { Nav, Logo, StyledHeader } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Container } from "./styles/Container.styled"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <StyledHeader bg='red' >
            <Container bg="./images/image.jpg" height="800px">
                <Nav>
                        <Logo src='./images/a4a.png' alt='' />
                        <Button color="green"><Link to="/">home</Link></Button>
                        <Button color="green"><Link to="/programme">programme</Link></Button>
                        <Button color="green"><Link to="/news">News</Link></Button>
                        <Button color="green"><Link to="/about">Abount Us</Link></Button>
                        <Button color="green"><Link to="/contact">Contact Us</Link></Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}