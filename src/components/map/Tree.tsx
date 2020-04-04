import React from "react";
import { randomInt } from "../../utils/random";
import { MapCol } from "./Map";

export const Tree: React.FC = () => (
    <MapCol
        style={{
            backgroundImage: `url(img/tree-${randomInt(1, 2)}.png)`,
        }}
    />
)