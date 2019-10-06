import styled from 'styled-components';
import { lighten } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { below, white, tomato, indigo } from '../utilities';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: 1rem;
        padding: 3px 10px;
    `,

    cancel: () => `
        background: ${tomato};
            &:hover {
                background: ${lighten(0.2, tomato)}
            }
    `
}

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

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;