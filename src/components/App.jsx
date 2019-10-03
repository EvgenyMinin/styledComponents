import React, { Component } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 2rem;
    color: red;
`;

const Button = styled.button`
    color: white;
    font-size: 2rem;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background: ${ ({type}) => type === 'cancel' ? 'tomato' : 'indigo' }
`;

class App extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Heading> Styled components</Heading>
                <Button>Save</Button>
                <Button type='cancel'>Cancel</Button>
            </>
        );
    }
}
 
export default App;