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
    background: transparent;
    border: 2px solid;
    color: #444;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 15px;
    cursor: pointer;
    outline: none;
`;

const Message = styled.div`
    font-family: 'Pixel Cyr';
    max-width: 190px;
    margin: 0 auto;
    margin-top: 100px;
    line-height: 25px;
    margin-bottom: 10px;
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
