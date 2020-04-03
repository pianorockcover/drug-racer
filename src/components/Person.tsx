import React, { useEffect, useState } from "react";
import { BLOCK_SIZE, STEP_SIZE, MAP_WIDTH } from "../globals";

interface PersonState {
    top: number;
    left: number;
    inJump?: boolean;
}

interface PersonProps {
    grabTreasure: (i: number, j: number) => void;
    setPosition: (position: number[]) => void;
}

export class Person extends React.PureComponent<PersonProps, PersonState> {
    state: PersonState = {
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
                    if (this.state.left < MAP_WIDTH * BLOCK_SIZE - BLOCK_SIZE - STEP_SIZE) {
                        this.setState({ left: this.state.left + STEP_SIZE });
                    }
                    break;
                case "a":
                    if (this.state.left > 0) {
                        this.setState({ left: this.state.left - STEP_SIZE });
                    }
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
                            }, 25)
                        }
                    }, 25)
                    break;
                case " ":
                    this.props.grabTreasure(4, Math.floor(this.state.left / BLOCK_SIZE) + 1);
                    break;
            }
        });
    }

    componentDidUpdate(prevProps: PersonProps, prevState: PersonState) {
        if (prevState.left !== this.state.left || prevState.top !== this.state.top) {
            setTimeout(() => {
                this.props.setPosition([this.state.left, this.state.top])
            }, 100)
        }
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