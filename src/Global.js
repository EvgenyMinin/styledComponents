import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
    ${normalize()};
    body {
        background: red;
    }
`;

export default GlobalStyle;