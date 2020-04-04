import React from "react";
import { MapCol } from "./Map";

interface GroundProps {
    isTop?: boolean;
}

export const Ground: React.FC<GroundProps> = ({ isTop }) => (
    <MapCol
        style={{
            backgroundImage: `url(img/ground${isTop ? "-top-1" : "-1"}.jpg)`,
        }}
    />
)