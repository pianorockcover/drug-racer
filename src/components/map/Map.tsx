import React from "react";
import { BLOCK_SIZE, MAP_WIDTH } from "../../globals";
import { Ground } from "./Ground";
import { Sky } from "./Sky";
import { Stone } from "./Stone";
import { Tree } from "./Tree";
import styled from "styled-components";

const getTileComponent = (tile: Tile, k: number) => {
    switch (tile) {
        case "sk":
            return <Sky key={k} />
        case "gr":
            return <Ground key={k} />
        case "gt":
            return <Ground isTop={true} key={k} />
        case "st":
            return <Stone key={k} />
        case "tr":
            return <Tree key={k} />
        default:
            <Sky key={k} />
    }
}

const Wrapper = styled.div`
    max-width: 100%;
    overflow: hidden;
    background: url(img/sky.jpg);
    background-color: #00265d;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    position: relative;
    width: ${MAP_WIDTH * BLOCK_SIZE}px;
`;

const MapRow = styled.div`
    display: flex;
`;

export const MapCol = styled.div`
    width: ${BLOCK_SIZE}px;
    height: ${BLOCK_SIZE}px;
    flex: 1;
    background-size: cover;
    background-repeat: no-repeat;
`;

export type Tile = "gr" | "gt" | "sk" | "st" | "tr";

interface MapProps {
    tiles: Tile[][];
}

export const Map = React.memo(({ tiles }: MapProps) => (
    <Wrapper>
        {tiles.map((row, i) =>
            <MapRow key={i}>
                <React.Fragment>
                    {row.map((tile, j) => getTileComponent(tile, j))}
                </React.Fragment>
            </MapRow>
        )}
    </Wrapper>
));