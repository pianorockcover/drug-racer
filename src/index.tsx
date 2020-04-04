import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Game } from "./Game";
import { StartPage } from "./components/StartPage";
import { Win } from "./components/Win";
import { Loose } from "./components/Lost";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-contend: center;
`;

const App = () => {
    const [isGameStarted, setGameStarted] = useState<boolean>();
    const [isWin, setWin] = useState<boolean>();
    const [isLoose, setLoose] = useState<boolean>();

    const onStartGame = () => {
        setWin(false);
        setLoose(false);
        setGameStarted(true);
    }

    const onWin = () => {
        setWin(true);
        setGameStarted(false);
    }

    const onLoose = () => {
        setLoose(true);
        setGameStarted(false);
    }

    return (
        <Wrapper>
            {!isGameStarted && <StartPage onStartGame={onStartGame} />}
            {isGameStarted && <Game onLoose={onLoose} onWin={onWin} />}

            {isWin && <Win onStartGame={onStartGame} />}
            {isLoose && <Loose onStartGame={onStartGame} />}
        </Wrapper>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app") as HTMLElement,
);
