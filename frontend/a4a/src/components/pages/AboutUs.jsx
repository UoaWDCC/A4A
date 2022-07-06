import React from "react";
import Header from "../Header";
import { Heading } from "../styles/Heading.styled";
import { Container } from "../styles/Container.styled";
function AboutUs() {
    return (
        <>
            <Header />
            <Container color="green" height="120px">
            </Container>
            <Container color="red" height="400px">
                <Heading>About Us</Heading>
            </Container>
        </>
    );
}
export default AboutUs