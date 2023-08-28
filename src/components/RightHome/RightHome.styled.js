import styled from 'styled-components';
import back_img from '../../images/girl-and-pet.png'

const RightMainContainer = styled.div`
width: 775px;
height: 900px;

flex-shrink: 0;
background-image: url(${back_img});
background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
`;

const RightMainLayout = styled.div`
width: 680px;
height: 100vh;
flex-shrink: 0;
border-radius: 20px;
background: #FBE0DC;
display: flex;
align-items: center;
justify-content: center;
width: 50%;
max-width: 775px;

margin-left: auto;
`;

export {RightMainContainer, RightMainLayout}