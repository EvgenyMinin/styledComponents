import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from './../Global';
import Fake from './Fake';
import Header from '../layouts/Header';
import { Button, Card } from '../elements';
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
                <Header />
                <GlobalStyle />
                <main>
                    <Card>
                        <h2>Card Heading</h2>
                        <Card.Button>Say Hello</Card.Button>
                    </Card>
                    <Card>
                        <h2>Card Heading</h2>
                        <Card.Button modifiers='cancel'>Don't Say Hello</Card.Button>
                    </Card>
                    <StyledFake />
                    <Fake />
                    <Button modifiers='small'>Say Hello</Button>
                    <Button modifiers='cancel'>Don't Say Hello</Button>
                    <Button modifiers={['small', 'cancel']}>Don't Say Hello</Button>
                </main>
            </AppWrapper>
        );
    }
}
 
export default App;