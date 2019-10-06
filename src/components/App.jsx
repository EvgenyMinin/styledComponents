import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
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
`;

const StyledFake = styled(Fake)`
    h2 {
        color: yellow;
    }
`;

const theme = {
    colors: {
        primary: '#E54B4B',
        secondary: '#DBDE61',
    }
}

const themeTwo = {
    colors: {
        primary: '#4b0082',
        secondary: '#ff6347',
    }
}

class App extends Component {
    state = {  }
    render() { 
        return (
            <ThemeProvider theme={theme}>
                <AppWrapper>
                    <Header />
                    <GlobalStyle />
                    <main
                        css={`
                            background: red;
                            h2 {
                                font-size: 50px; 
                            }
                        `}
                    >
                        <ThemeProvider theme={themeTwo}>
                            <Card>
                                <h2>Card Heading (with theme)</h2>
                                <Card.Button>Say Hello</Card.Button>
                                <Card.Button modifiers='cancel'>Don't Say Hello</Card.Button>
                            </Card>
                        </ThemeProvider>
                        <Card>
                            <h2>Card Heading (without theme)</h2>
                            <Card.Button>Say Hello</Card.Button>
                            <Card.Button modifiers='cancel'>Don't Say Hello</Card.Button>
                        </Card>
                        <StyledFake />
                        <Fake />
                        <Button modifiers='small'>Say Hello</Button>
                        <Button modifiers='cancel'>Don't Say Hello</Button>
                        <Button modifiers={['small', 'cancel']}>Don't Say Hello</Button>
                    </main>
                </AppWrapper>
            </ThemeProvider>
        );
    }
}
 
export default App;