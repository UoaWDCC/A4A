import React from "react";
import Header from "../Header";
import { Container } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled"

function Home() {
    return (
        <>
            <Header />
            <Container bg="./images/image.jpg" height="800px" />
            <Container color="red" height="500px">
                <Heading>Home Page</Heading>
            </Container>
            <Container color="green">
                <Heading>Home Page</Heading>
            </Container>
        </>
    );
}
export default Home