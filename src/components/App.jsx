import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Fake from './Fake';

const size = {
    small: 400,
    med: 960,
    large: 1140
}

const above = Object.keys(size).reduce((acc, label) => {
    acc[label]  = (...args) => css`
        @media (min-width: ${size[label]}px) {
            ${css(...args)}
        }
    `

    return acc;
}, {});

const below = Object.keys(size).reduce((acc, label) => {
    acc[label]  = (...args) => css`
        @media (max-width: ${size[label]}px) {
            ${css(...args)}
        }
    `

    return acc;
}, {});

const Heading = styled.h1`
    font-size: 2rem;
    color: red;
    ${above.med`
        color: lightgreen;
    `}
`;

const color = 'white';

const Button = styled.button`
    color: ${color};
    font-size: 2rem;
    padding: 5px 20px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background: indigo;
    ${below.med`
        font-size: 1rem;
    `}
`;

const CancelButton = styled(Button)`
    background: tomato;
`;

const AppWrapper = styled.div`
    header {
        background: teal;
        padding: 20px;
        &:hover {
            background: blue;
        }
    }
    ${Button} {
        margin-bottom: 2rem;
    }
`;

const StyledFake = styled(Fake)`
    h2 {
        color: yellow;
    }
`;

class App extends Component {
    state = {  }
    render() { 
        return (
            <AppWrapper>
                <header>
                    <Heading> Styled components</Heading>
                    <StyledFake />
                    <Fake />
                    <Button>Save</Button>
                    <CancelButton>Cancel</CancelButton>
                </header>
            </AppWrapper>
        );
    }
}
 
export default App;