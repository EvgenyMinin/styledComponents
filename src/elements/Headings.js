import React from 'react';
import styled from 'styled-components';
import { above } from './../utilities';

const Header = ({ className }) => (
    <header className={className}>
        Styled components
    </header>
)

export default styled(Header)`
    font-size: 2rem;
    color: red;
    ${above.med`
        color: lightgreen;
    `}
`;