import React, { useState } from "react";
import { Map } from "./components/Map";
import { Tile, MAP_HEIGHT, MAP_WIDTH } from "./globals";
import { Person } from "./components/Person";
import { Hint } from "./components/Hint";
import { Counter } from "./components/Counter";
import { Win } from "./components/Win";
import { Lost } from "./components/Lost";
import { Enemy } from "./components/Enemy";

const tiles: Tile[][] = [];
let treasures = 0;

for (let i = 0; i < MAP_HEIGHT; i++) {
    tiles[i] = [];
    for (let j = 0; j < MAP_WIDTH; j++) {
        if (i === 4 && j !== 0) {
            const random = Math.floor(Math.random() * Math.floor(100));
            tiles[i][j] = random % 11 === 0 ? "tr" : random % 4 === 0 ? "st" : "sk";

            if (random % 11 === 0 || random % 4 === 0) {
                treasures++;
            }
            continue;
        }

        if (i < 4) {
            tiles[i][j] = "sk";
            continue;
        }

        if (i === 5) {
            tiles[i][j] = "gt";
            continue;
        }

        if (i > 5) {
            tiles[i][j] = "gr";
            continue;
        }
    }
}


export const App = () => {
    const [grabbedTreasures, setGrabbedTreasures] = useState<string[]>([]);
    const [personPosition, setPersonPosition] = useState<number[]>();
    const [enemyPosition, setEnemyPosition] = useState<number[]>();
    const [isLost, setIsLost] = useState<boolean>(false);

    const grabTreasure = (i: number, j: number) =>
        (tiles[i][j] === "st" || tiles[i][j] === "tr")
        && !grabbedTreasures.find((treasure) => treasure === `${i}${j}`)
        && setGrabbedTreasures([...grabbedTreasures, `${i}${j}`]);

    if (personPosition && enemyPosition
        && Math.abs(personPosition[0] - enemyPosition[0]) < 10
        && Math.abs(personPosition[1] - enemyPosition[1]) < 50
        && !isLost && grabbedTreasures.length !== treasures) {
        setIsLost(true);
    }

    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden"
            }}
        >
            {!isLost && grabbedTreasures.length === treasures && <Win />}
            {isLost && <Lost />}
            <Hint />
            <Person
                grabTreasure={grabTreasure}
                setPosition={setPersonPosition}
            />
            <Counter
                common={treasures}
                left={grabbedTreasures.length}
            />
            <Map
                tiles={tiles}
            />
            <Enemy
                setPosition={setEnemyPosition}
            />
        </div>
    )
}