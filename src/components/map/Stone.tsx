import React from "react";
import { randomInt } from "../../utils/random";
import { MapCol } from "./Map";

export const Stone: React.FC = () => (
    <MapCol
        style={{
            backgroundImage: `url(img/stone-${randomInt(1, 2)}.png)`,
        }}
    />
)