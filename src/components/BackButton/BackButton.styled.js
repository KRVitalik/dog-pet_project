import styled from 'styled-components';

const ButtonBackIcon = styled.svg`
fill: #FF868E;
`;

const ButtonBack = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
flex-shrink: 0;
border: 0;
background: #FBE0DC;
border-radius: 10px;
&:hover{
    background: #FF868E;
}
&:hover ${ButtonBackIcon}{
    fill:#FFF;
}
`;


export {ButtonBack, ButtonBackIcon}