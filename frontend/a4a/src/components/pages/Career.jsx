import React from "react";
import Header from "../Header";
import { Heading } from "../styles/Heading.styled";
import { Container } from "../styles/Container.styled";
function Career() {
    return (
        <>
            <Header />
            <Container color="green" height="120px">
            </Container>
            <Container color="red" height="400px">
                <Heading>Career Pathway</Heading>
            </Container>
        </>
    );
}
export default Career