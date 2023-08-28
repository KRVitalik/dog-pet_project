import styled from 'styled-components';
import back_img from '../../images/girl-and-pet.png'

const RightMainContainer = styled.div`
width: 775px;
height: 900px;
flex-shrink: 0;
background: url(${back_img});
`;

const RightMainLayout = styled.div`
width: 680px;
height: 840px;
flex-shrink: 0;
border-radius: 20px;
background: #FBE0DC;
display: flex;
align-items: center;
justify-content: center;
width: 50%;
max-width: 775px;
`;

export {RightMainContainer, RightMainLayout}