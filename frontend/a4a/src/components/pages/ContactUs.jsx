import React from "react";
import Header from "../Header";
import { Heading } from "../styles/Heading.styled";
import { Container } from "../styles/Container.styled";
function ContactUs() {
    return (
        <>
            <Header />
            <Container color="green" height="120px">
            </Container>
            <Container color="red" height="400px">
                <Heading>Contact Us</Heading>
            </Container>
        </>
    );
}
export default ContactUs