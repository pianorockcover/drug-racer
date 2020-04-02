import React from "react";
import { Map } from "./components/Map";
import { Tile, MAP_HEIGHT, MAP_WIDTH } from "./globals";
import { Person } from "./components/Person";

export const App = () => {
    const tiles: Tile[][] = [];
    for (let i = 0; i < MAP_HEIGHT; i++) {
        tiles[i] = [];
        for (let j = 0; j < MAP_WIDTH; j++) {
            if (i === 4 && j !== 0) {
                const random = Math.floor(Math.random() * Math.floor(100));
                tiles[i][j] = random % 11 === 0 ? "tr" : random % 4 === 0 ? "st" : "sk";
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

    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden"
            }}
        >
            <Person />
            <Map tiles={tiles} />
        </div>
    )
}