import styled from 'styled-components';
import { Button } from './Buttons';
import { shadow } from '../utilities';

export const Card = styled.div`
    ${shadow[2]};
    padding: 10px;
    border-radius: 6px;
`;

const CardButton = styled(Button)`
    width: 100%;
`;

Card.Button = CardButton;