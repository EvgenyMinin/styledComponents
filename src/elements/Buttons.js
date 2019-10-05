import styled from 'styled-components';
import { below, fixed } from '../utilities';

const color = 'white';

export const Button = styled.button`
    color: ${color};
    font-size: 2rem;
    padding: 5px 20px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background: indigo;
    ${below.med`
        font-size: 1rem;
    `}
`;

export const CancelButton = styled(Button)`
    background: tomato;
    ${fixed({ y: '100px', x: '600px' })};
`;