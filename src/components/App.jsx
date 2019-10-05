import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from './Global';
import Fake from './Fake';
import { Heading, Button, CancelButton } from '../elements';
import { teal } from '../utilities';

const AppWrapper = styled.div`
    header {
        background: ${teal};
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
                    <CancelButton top='100'>Cancel</CancelButton>
                </header>
                <GlobalStyle />
            </AppWrapper>
        );
    }
}
 
export default App;