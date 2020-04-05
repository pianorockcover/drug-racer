import React from "react";
import { BLOCK_SIZE, STEP_SIZE, MAP_WIDTH, SKY_HEIGHT } from "../globals";
import styled from "styled-components";

interface PersonState {
    top: number;
    left: number;
    inJump?: boolean;
}

interface PersonProps {
    grabTreasure: (i: number, j: number) => void;
    setPosition: (position: number[]) => void;
}

const PersonComponent = styled.div`
    width: ${BLOCK_SIZE}px;
    height: ${BLOCK_SIZE}px;
    position: absolute;
    z-index: 2;
    background-image: url(img/person.png);
    background-size: cover;
    background-repeat: no-repeat;
`;

export class Person extends React.PureComponent<PersonProps, PersonState> {
    state: PersonState = {
        top: SKY_HEIGHT * BLOCK_SIZE,
        left: 0,
    }

    onRight = () => (this.state.left < MAP_WIDTH * BLOCK_SIZE - BLOCK_SIZE - STEP_SIZE)
        && this.setState({ left: this.state.left + STEP_SIZE });

    onLeft = () => this.state.left > 0 && this.setState({ left: this.state.left - STEP_SIZE });

    onJump = () => {
        this.setState({ inJump: true });
        const upInterval = setInterval(() => {
            const newTop = this.state.top - 10;
            this.setState({ top: newTop });
            if (newTop < BLOCK_SIZE / 2) {
                clearInterval(upInterval);

                const downInterval = setInterval(() => {
                    const newTop = this.state.top + 10;
                    this.setState({ top: newTop });

                    if (newTop === SKY_HEIGHT * BLOCK_SIZE) {
                        clearInterval(downInterval);
                        this.setState({ inJump: false });
                    }
                }, 25)
            }
        }, 25)
    }

    onGrab = () => this.props.grabTreasure(SKY_HEIGHT, Math.floor(this.state.left / BLOCK_SIZE) + 1);

    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            if (this.state.inJump) {
                return;
            }
            switch (e.keyCode) {
                case 68:
                    this.onRight();
                    break;
                case 65:
                    this.onLeft();
                    break;
                case 87:
                    this.onJump();
                    break;
                case 32:
                    this.onGrab();
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
            <>
                <PersonComponent
                    style={{
                        left,
                        top
                    }}
                />
            </>
        )
    }
}