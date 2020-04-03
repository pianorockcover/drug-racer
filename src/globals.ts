export const BLOCK_SIZE = Math.floor(window.innerWidth / 25);
export const MAP_WIDTH = Math.floor(window.innerWidth / BLOCK_SIZE);
export const MAP_HEIGHT = 7;
export const STEP_SIZE = 15;

export type Tile = "gr" | "gt" | "sk" | "st" | "tr";
export type MapTiles = Tile[][];
