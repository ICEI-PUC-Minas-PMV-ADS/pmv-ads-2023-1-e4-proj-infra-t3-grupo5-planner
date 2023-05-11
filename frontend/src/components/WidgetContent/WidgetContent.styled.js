import styled from "styled-components";
import {toRem} from "../../utils/toRem";

export const Container = styled.div`
display:flex;
justify-content:space-between;
width:100%;
padding:${toRem(8)};
gap:${toRem(16)};
align-items: center;
`

export const RightSideContent = styled.div`
display:flex;
flex-direction:row;
gap:${toRem(8)};
align-items: center;
`

export const LeftSideContent = styled.div`
display:flex;
flex-direction:row;
gap:${toRem(4)};
align-items: center;
`

export const IconButton = styled.button`
border:none;
display:flex;
align-items:center; 
`