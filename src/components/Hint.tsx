import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-family: "Pixel Cyr";
    color: #ffffff;
    padding: 10px;
`;

export const Hint = () => (
    <Wrapper>
        <div>a, d - двигаться</div>
        <div>w - прыгать</div>
        <div>space - взять закладку</div>
    </Wrapper>
)