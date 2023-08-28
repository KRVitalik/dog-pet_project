import styled from 'styled-components';

// const GalleryMainContainer = styled.div`
// display: flex;
// flex-direction: column;
// /* align-items: center; */
// width: 680px;
// height: auto;
// border-radius: 20px;
// background: #FFF;
// padding: 20px;
// gap: 20px;
// box-sizing: border-box;
// `


const LikesTitle = styled.h2`
display: flex;
align-items: center;
justify-content: center;
width: 119px;
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

const LikesHeadContainer = styled.div`
display: flex;
gap: 10px;
`

export {
    LikesTitle,
    LikesHeadContainer
}