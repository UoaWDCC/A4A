import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    vertical-align: middle;
    max-width: 50%;
    & > div,
    & > ul {
        flex: 1;
    }
`