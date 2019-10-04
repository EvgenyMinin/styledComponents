import React, { Component } from 'react';
import styled from 'styled-components';
import Fake from './Fake';

const Heading = styled.h1`
    font-size: 2rem;
    color: red;
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