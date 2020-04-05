import React, { useState, useMemo, useCallback } from "react";
import { Person } from "./components/Person";
import { Hint } from "./components/Hint";
import { Counter } from "./components/Counter";
import { Enemy } from "./components/Enemy";
import { generateMap } from "./components/map/generateMap";
import styled from "styled-components";
import { Map } from "./components/map/Map";

const Wrapper = styled.div`
    justify-content: center;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const Area = styled.div`
    position: relative;
    overflow: hidden;
    flex: 1;
`
interface GameProps {
    onWin: () => void;
    onLoose: () => void;
}

export const Game: React.FC<GameProps> = ({ onWin, onLoose }) => {
    const [grabbedTreasures, setGrabbedTreasures] = useState<string[]>([]);
    const [personPosition, setPersonPosition] = useState<number[]>();
    const [enemyPosition, setEnemyPosition] = useState<number[]>();

    const map = useMemo(() => generateMap(), []);
    const tiles = map[0];
    const treasures = map[1];

    const grabTreasure = (i: number, j: number) =>
        (tiles[i][j] === "st" || tiles[i][j] === "tr")
        && !grabbedTreasures.find((treasure) => treasure === `${i}${j}`)
        && setGrabbedTreasures([...grabbedTreasures, `${i}${j}`]);

    if (personPosition && enemyPosition
        && Math.abs(personPosition[0] - enemyPosition[0]) < 10
        && Math.abs(personPosition[1] - enemyPosition[1]) < 50
        && grabbedTreasures.length !== treasures) {
        onLoose();
    }

    if (grabbedTreasures.length === treasures) {
        onWin();
    }

    return (
        <Wrapper>
            <Area>
                <Map tiles={tiles} />
                <Hint />
                <Counter
                    common={treasures}
                    left={grabbedTreasures.length}
                />
                <Person
                    grabTreasure={grabTreasure}
                    setPosition={setPersonPosition}
                />
                <Enemy setPosition={setEnemyPosition} />
            </Area>
        </Wrapper>
    )
}