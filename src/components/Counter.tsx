import React from "react";

interface CounterProps {
    common: number;
    left: number;
}

export const Counter: React.FC<CounterProps> = ({ common, left }) => (
    <div
        style={{
            position: "absolute",
            top: 0,
            right: 0,
            fontFamily: "Pixel Cyr",
            padding: 10,
            color: "#ffc107",
            backgroundImage: `url(img/treasure.png)`,
            backgroundSize: 20,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: 10,
            backgroundPositionY: "center",
            paddingLeft: 40,
            display: "flex",
            fontSize: 20,
            backgroundColor: "#ff5722", 
        }}
    >
        <div>
            {left}
        </div>
        <div style={{ marginLeft: 10, marginRight: 10 }}>/</div>
        <div>
            {common}
        </div>
    </div>
)