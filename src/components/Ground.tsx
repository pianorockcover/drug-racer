import React from "react";
import { BLOCK_SIZE } from "../globals";

interface GroundProps {
    isTop?: boolean;
}

export const Ground: React.FC<GroundProps> = ({ isTop }) => (
    <div
        style={{
            width: "100%",
            height: "100%",
            background: `url(img/ground${isTop ? "-top" : ""}.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
    />
)