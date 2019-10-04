import React, { Component } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 2rem;
    color: red;
`;

const color = 'white';

const Button = styled.button`
    color: ${color};
    font-size: 2rem;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background: ${ ({type}) => type === 'cancel' ? 'tomato' : 'indigo' }
`;

const AppWrapper = styled.div`
    header {
        background: teal;
        padding: 20px;
        &:hover {
            background: blue;
        }
    }
`;

class App extends Component {
    state = {  }
    render() { 
        return (
            <AppWrapper>
                <header>
                    <Heading> Styled components</Heading>
                    <Button>Save</Button>
                    <Button type='cancel'>Cancel</Button>
                </header>
            </AppWrapper>
        );
    }
}
 
export default App;