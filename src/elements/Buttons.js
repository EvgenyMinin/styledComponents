import styled from 'styled-components';
import { below, white, green } from '../utilities';

export const Button = styled.button`
    color: ${white};
    font-size: 2rem;
    padding: 5px 20px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background: indigo;
    ${below.med`
        font-size: 1rem;
    `};
    &:hover {
        background: ${green};
    };
    ${({size}) => {
        if (size === 'small') {
            return `
                font-size: 1rem;
                padding: 3px 10px;
            `;
        }
    }}
    ${({type}) => {
        if (type === 'cancel') {
            return `
                background: tomato;
            `;
        }
    }}
`;