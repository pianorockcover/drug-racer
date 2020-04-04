import { MAP_HEIGHT, MAP_WIDTH } from "../../globals";
import { Tile } from "./Map";

/**
 * Генерирует карту
 * @returns [tiles, treasuresAmount]
 */
export const generateMap: () => [Tile[][], number] = () => {
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

    return [tiles, treasures];
}