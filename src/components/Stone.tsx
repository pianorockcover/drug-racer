import React from "react";
import { randomInt } from "../utils/random";

export const Stone: React.FC = () => (
    <div
        style={{
            width: "100%",
            height: "100%",
            background: `url(img/stone-${randomInt(1, 2)}.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
    />
)