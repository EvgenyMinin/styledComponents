import React, { Component } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 2rem;
    color: red;
`;

class App extends Component {
    state = {  }
    render() { 
        return (
            <Heading>
                Styled components
            </Heading>
        );
    }
}
 
export default App;