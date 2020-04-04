import React from "react";

export const Hint = () => (
    <div 
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            fontFamily: "Pixel Cyr",
            color: "#ffffff",
            padding: 10,
        }}
    >
        <div>
            a, d - двигаться
        </div>
        <div>
            w - прыгать
        </div>
        <div>
            space - взять закладку
        </div>
    </div>
)