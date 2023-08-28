import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StickyMainContainer = styled.div`
max-width: 446px;
max-height: 544px;
  position: fixed;
  top: 30px;
  left: 147px;
  width: 50%; 
`;

const StickyLogoContainer = styled.div`
display: flex;
width: 106.161px;
height: 24px;
padding-right: 0px;
justify-content: center;
align-items: center;
gap: 7.894px;
flex-shrink: 0;
margin-bottom: 80px;
`;

const StickyTitle = styled.h1`
color: #1D1D1D;
font-family: Jost;
font-size: 44px;
font-style: normal;
font-weight: 500;
line-height: 58px;
margin-bottom: 10px;
`;

const StickyWelcomeText = styled.p`
color: #8C8C8C;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 60px;
`;

const StickyPostTitle = styled.h2`
color: #1D1D1D;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 20px;
`;

const StickyButtonContainer = styled.ul`
display: flex;
gap: 16px;
`

const StickyButton = styled(NavLink)`
width: 138px;
height: 36px;
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: center;
border: 0;
border-radius: 10px;
background-color: #FFF;

color: #FF868E;
text-align: center;
font-family: Jost;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 1.33; /* 133.333% */
letter-spacing: 2px;
text-decoration: none;

&:hover{
    background: #FBE0DC;
}
&:focus{
    background-color: #FF868E;
    color: #FFF;
}
&.active{
  background-color: #FF868E;
    color: #FFF;
}
`;

const StickyImageBtn = styled.li`
  display: flex;
  flex-direction:column;
  gap: 10px;
  align-items: center;

`
const StickyVoteContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 138px;
height: 198px;
flex-shrink: 0;
border-radius: 20px;
border: 4px solid rgba(255, 255, 255, 0.60);
background: #B4B7FF;
`

const StickyBreedsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 138px;
height: 198px;
flex-shrink: 0;
border-radius: 20px;
border: 4px solid rgba(255, 255, 255, 0.60);
background: #97EAB9;
`

const StickySearchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 138px;
height: 198px;
flex-shrink: 0;
border-radius: 20px;
border: 4px solid rgba(255, 255, 255, 0.60);
background: #FFD280;
`

export { StickyLogoContainer, StickySearchContainer, StickyBreedsContainer, StickyVoteContainer, StickyMainContainer, StickyTitle, StickyWelcomeText, StickyPostTitle, StickyButtonContainer, StickyButton, StickyImageBtn } 