import React, { useState, useEffect } from "react";
import { BLOCK_SIZE, MAP_WIDTH } from "../globals";

const initialPosition = Math.floor(MAP_WIDTH * BLOCK_SIZE / 2 - BLOCK_SIZE);
const getRandomWalkTo = () => Math.floor(Math.random() * Math.floor(MAP_WIDTH * BLOCK_SIZE - BLOCK_SIZE));

interface EnemyState {
    left: number,
}

interface EnemyProps {
    setPosition: (position: number[]) => void;
}

export class Enemy extends React.PureComponent<EnemyProps, EnemyState> {
    state: EnemyState = {
        left: initialPosition,
    }

    walkTo = getRandomWalkTo();

    componentDidMount() {
        setInterval(() => {
            if (Math.abs(this.walkTo - this.state.left) < 10) {
                this.walkTo = getRandomWalkTo();
            }
            this.setState({ left: this.walkTo < this.state.left ? this.state.left - 10 : this.state.left + 10 });
        }, 50);
    }

    componentDidUpdate(prevProps: EnemyProps, prevState: EnemyState) {
        if (prevState.left !== this.state.left) {
            this.props.setPosition([this.state.left, 4 * BLOCK_SIZE])
        }
    }

    render() {
        return (
            <div
                style={{
                    width: BLOCK_SIZE,
                    height: BLOCK_SIZE,
                    position: "absolute",
                    left: this.state.left,
                    top: 4 * BLOCK_SIZE,
                    zIndex: 2,
                    backgroundImage: `url(img/enemy.png)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            />
        )
    }
}