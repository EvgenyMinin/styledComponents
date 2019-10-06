import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
    ${normalize()};

    body {
        margin: 0;
        font-family: 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
    }

    main {
        width: 90%;
        margin: 0 auto;
    }
`;

export default GlobalStyle;