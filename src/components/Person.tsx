import React, { useEffect, useState } from "react";
import { BLOCK_SIZE, STEP_SIZE } from "../globals";

interface PresonState {
    top: number;
    left: number;
    inJump?: boolean;
}

export class Person extends React.PureComponent<{}, PresonState> {
    state: PresonState = {
        top: 4 * BLOCK_SIZE,
        left: 0,
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            if (this.state.inJump) {
                return;
            }
            switch (e.key) {
                case "d":
                    this.setState({ left: this.state.left + STEP_SIZE });
                    break;
                case "a":
                    this.setState({ left: this.state.left - STEP_SIZE });
                    break;
                case "w":
                    this.setState({ inJump: true });
                    const upInterval = setInterval(() => {
                        const newTop = this.state.top - 10;
                        this.setState({ top: newTop });
                        if (newTop < BLOCK_SIZE / 2) {
                            clearInterval(upInterval);

                            const downInterval = setInterval(() => {
                                const newTop = this.state.top + 10;
                                this.setState({ top: newTop });

                                if (newTop === 4 * BLOCK_SIZE) {
                                    clearInterval(downInterval);
                                    this.setState({ inJump: false });
                                }
                            }, 5)
                        }
                    }, 10)
                    break;
            }
        });
    }

    render() {
        const { left, top } = this.state;
        return (
            <div
                style={{
                    width: BLOCK_SIZE,
                    height: BLOCK_SIZE,
                    background: "red",
                    position: "absolute",
                    left,
                    top,
                    zIndex: 2,
                }}
            />
        )
    }
}