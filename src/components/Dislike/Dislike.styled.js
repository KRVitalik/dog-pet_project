import styled from 'styled-components';

const DislikesTitle = styled.h2`
display: flex;
align-items: center;
justify-content: center;
width: 156px;
height: 40px;
border-radius: 10px;
background: #FF868E;
color: #FFF;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 1.5; /* 150% */
letter-spacing: 2px;
border: 0;
`;

const NoImgText = styled.p`
width: 640px;
height: 60px;
border-radius: 10px;
background: #F8F8F7;
color: #8C8C8C;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
padding: 18px 20px;

`

export {
    NoImgText,
    DislikesTitle,
}