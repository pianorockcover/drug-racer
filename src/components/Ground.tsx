import React from "react";

interface GroundProps {
    isTop?: boolean;
}

export const Ground: React.FC<GroundProps> = ({ isTop }) => (
    <div
        style={{
            width: "100%",
            height: "100%",
            background: `url(img/ground${isTop ? "-top-1" : "-1"}.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
    />
)