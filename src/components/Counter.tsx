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
        }}
    >
        <span>
            {common}
        </span>
         / 
        <span>
            {left}
        </span>
    </div>
)