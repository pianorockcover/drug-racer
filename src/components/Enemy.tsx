import React from "react";
import { BLOCK_SIZE, MAP_WIDTH, SKY_HEIGHT } from "../globals";
import styled from "styled-components";

const initialPosition = Math.floor(MAP_WIDTH * BLOCK_SIZE / 2 - BLOCK_SIZE);
const getRandomWalkTo = () => Math.floor(Math.random() * Math.floor(MAP_WIDTH * BLOCK_SIZE - BLOCK_SIZE));

interface EnemyState {
    left: number,
}

interface EnemyProps {
    setPosition: (position: number[]) => void;
}

const EnemyComponent = styled.div`
    width: ${BLOCK_SIZE}px;
    height: ${BLOCK_SIZE}px;
    position: absolute;
    top: ${SKY_HEIGHT * BLOCK_SIZE}px;
    z-index: 2;
    background-image: url(img/enemy.png);
    background-size: cover;
    background-repeat: no-repeat;
`;

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
            this.props.setPosition([this.state.left, SKY_HEIGHT * BLOCK_SIZE])
        }
    }

    render() {
        return (
            <EnemyComponent
                style={{
                    left: this.state.left,
                }}
            />
        )
    }
}