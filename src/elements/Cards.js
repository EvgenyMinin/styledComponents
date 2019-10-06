import styled from 'styled-components';
import { Button } from './Buttons';

export const Card = styled.div`
    padding: 10px;
    border-radius: 6px;
`;

const CardButton = styled(Button)`
    width: 100%;
`;

Card.Button = CardButton;