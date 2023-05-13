import styled from "styled-components";

export const Line = styled.div`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-left: 13px;
    width: 616px;
    padding: 0;

`

export const Buttons = styled.div`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-left: 10px;
    width: 629px
`

export const Label = styled.div`
    flex-direction: column;

    &.label-name {
        width: 432px;
        margin-top: 44px;
        margin-bottom: 20px
    }

    &.label-type {
        width: 160px;
        margin-top: 44px;
        margin-bottom: 20px
    }

    &.label-value {
        width: 616px;
        margin-bottom: 55px;
    }
`

