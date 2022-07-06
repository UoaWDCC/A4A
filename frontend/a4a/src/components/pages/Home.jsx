import React from "react";
import Header from "../Header";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { Grid } from "../styles/Grid.styled";

function Home() {
    return (
        <>
            <Header />
            <Container bg="./images/image.jpg" height="800px">
                <Flex>
                    <div>
                        <h1>
                            Home Page
                        </h1>
                        <p display="inline-block" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </Flex>
            </Container>
            <Container color="red" height="500px">
                <img src="./images/img1.png" alt="placeholder"  padding="10px"/>
                <img src="./images/img2.png" alt="placeholder" />
                <img src="./images/img3.png" alt="placeholder" />
            </Container>
            <Container>
            <Grid>
                <div display="table-row">
                   <img src="./images/img1.png" alt="placeholder" width="20%" display="table-cell" margin="10px"/>
                   <img src="./images/img2.png" alt="placeholder" width="20%" display="table-cell"/>
                </div>
                <div display="table-row">
                    <img src="./images/img3.png" alt="placeholder" width="20%" display="table-cell"/>
                    <img src="./images/img3.png" alt="placeholder" width="20%" display="table-cell"/>
                </div>
            </Grid>
            </Container>
        </>
    );
}
export default Home