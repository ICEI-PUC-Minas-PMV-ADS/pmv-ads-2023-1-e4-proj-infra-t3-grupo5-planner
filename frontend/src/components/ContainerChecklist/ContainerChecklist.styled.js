import styled from "styled-components";

export const Line = styled.div`
    flex-direction: row;
    align-items: top;
    display: flex;
    justify-content: left;
    margin-left: 0px;
    width: 93%;
    padding: 0;
`

export const Buttons = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: right;
    bottom: 0;
    right: 13px;
    margin-bottom: 16px;
`

export const BoxSize = styled.div`
    position: relative;
    width: 414px;
    height: 376px;
`

export const Label = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;

    &.label-checkbox {
        width: 24px;
        height: 24px;
        margin-right: 8px;
        margin-top: 3px;
    }

    &.label-text {
        width: 85%;
    }
`

