import styled from 'styled-components';
import { lighten } from 'polished';
import { below, white, tomato, indigo } from '../utilities';

export const Button = styled.button`
    color: ${white};
    font-size: 2rem;
    padding: 5px 20px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background: ${indigo};
    ${below.med`
        font-size: 1rem;
    `};
    &:hover {
        background: ${lighten(0.2, indigo)};
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
                background: ${tomato};
                &:hover {
                    background: ${lighten(0.2, tomato)}
                }
            `;
        }
    }}
`;