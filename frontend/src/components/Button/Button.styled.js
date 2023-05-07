import styled from "styled-components";

const ButtonStyled = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &.radio-black-button, &.radio-white-button {
        background-color: #333333;
        width: 191px;
        height: 48px;
        border-radius: 32px;
        justify-content: left;
    }

    &.radio-black-button:hover, &.radio-white-button:hover, &.rectangular-black-button:hover, &.rectangular-white-button:hover {
        background-color: #ed4858;
    }

    &.rectangular-black-button, &.rectangular-white-button {
        background-color: #333333;
        width: 228px;
        height: 46px;
        border-radius: 8px;
    }

    &.radio-white-button, &.rectangular-white-button {
        background-color: #FFFFFF;
        border: 2px solid #000000;
        height: 46px;
    }

    &.pink-button {
        background-color: #ed4858;
        width: 62px;
        height: 30px;
        border-radius: 8px;
        border: 4px solid #000000;
    }

    &.close-button{
        width: 16px;
        height: 16px;
    }

    &.profile-picture, &.text-button{
        justify-content: left
    }
`;

export default ButtonStyled;