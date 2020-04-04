import React from "react";
import { MapTiles, Tile, BLOCK_SIZE, MAP_WIDTH } from "../globals";
import { Ground } from "./Ground";
import { Sky } from "./Sky";
import { Stone } from "./Stone";
import { Tree } from "./Tree";

interface MapProps {
    tiles: MapTiles;
}

const getTileComponent = (tile: Tile) => {
    switch (tile) {
        case "sk":
            return <Sky />
        case "gr":
            return <Ground />
        case "gt":
            return <Ground isTop={true} />
        case "st":
            return <Stone />
        case "tr":
            return <Tree />
        default:
            <Sky />
    }
}

export const Map = React.memo(({ tiles }: MapProps) => {
    return (
        <div style={{
            maxWidth: "100%",
            overflow: "hidden",
            background: `url(img/sky.jpg)`,
            backgroundColor: "#00265d",
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
        }}>
            <div style={{ position: "relative", width: MAP_WIDTH * BLOCK_SIZE }}>
                {tiles.map((row, i) =>
                    <div
                        style={{
                            display: "flex",
                        }}
                        key={i}
                    >
                        {row.map((tile, j) =>
                            <div
                                style={{
                                    width: BLOCK_SIZE,
                                    height: BLOCK_SIZE,
                                    flex: 1,
                                }}
                                key={`${i}-${j}`}
                            >
                                {getTileComponent(tile)}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
});