import styled from "styled-components";

export const ButtonStyled = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &.header-button {
        filter: none;
        width: 120px;
        height: 46px;
        border-radius: 32px;
        :hover {
            background-color: #FFFFFF   
        }
    }

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

    &.pink-button:hover{
        background-color: #333333;
        color: #ed4858;
        border: 4px solid #ed4858;
    }

    &.close-button{
        width: 16px;
        height: 16px;
    }

    &.profile-picture {
        width: 56px;
        height: 56px;
        background: transparent;
    }

    &.text-button {        
        height: 42px;
        background-color:transparent;
        border:none;
        filter: none;
       padding:8px;
    }
`;

export const ArrowStyled = styled.p`
    transform: ${props => props.isSelected ? 'rotate(90deg)' : 'rotate(0)'};
    transition: 'transform 0.3s ease';
    margin: 0;
`

