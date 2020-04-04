import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-image: url(img/phone.jpg);
    width: 100%;
    background-position: center top;
    background-repeat: no-repeat;
    height: 100vh;
    text-align: center;
`;

export const StartGameButton = styled.button`

`;

const Message = styled.div`
    font-family: 'Pixel Cyr';
    max-width: 300px;
    margin: 0 auto;
    margin-top: 100px;
`;

interface StartPageProps {
    onStartGame: () => void;
}

export const StartPage: React.FC<StartPageProps> = ({ onStartGame }) => {
    return (
        <Wrapper>
            <Message>Хэй бро! Клад на месте, координаты: ***</Message>
            <StartGameButton onClick={onStartGame}>Искать</StartGameButton>
        </Wrapper>
    )
}
