import React from "react";

export const Win = () => (
    <div
        style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            color: "#ffffff",
            zIndex: 3,
            display: "flex",
            background: "green",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <div>
            Вы выиграли!
        </div>
    </div>
)