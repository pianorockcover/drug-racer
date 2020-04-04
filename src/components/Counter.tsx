import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-family: "Pixel Cyr";
    padding: 10px;
    color: #ffc107;
    background-image: url(img/treasure.png);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position-x: 10px;
    background-position-y: center;
    padding-left: 40px;
    display: flex;
    font-size: 20px;
    background-color: #ff5722; 
`;

const Divider = styled.div`
    margin-left: 10px;
    margin-right: 10px;
`;

interface CounterProps {
    common: number;
    left: number;
}

export const Counter: React.FC<CounterProps> = ({ common, left }) => (
    <Wrapper>
        <div>{left}</div>
        <Divider>/</Divider>
        <div>{common}</div>
    </Wrapper>
)