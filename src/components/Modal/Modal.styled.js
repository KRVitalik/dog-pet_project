import styled from 'styled-components';
import upload from '../assets/upload.png'


const ModalContainer = styled.section`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
width: 100vW;
height: 100vh;
background: rgba(29, 29, 29, 0.60);
overflow: hidden;
z-index: 10;
padding: 30px;
text-align: center;
`

const ModalIconImage = styled.svg`
fill: #FF868E;
`

const ModalCloseBtn = styled.button`
position: absolute;
top: 20px;
right: 20px;
background-color: #FFF;
border-radius: 10px;
border: 0;
display: flex;
align-items: center;
justify-content: center;
padding: 11.5px;
cursor: pointer;
&:hover{
    background-color: #FF868E;
}
&:hover ${ModalIconImage}{
fill: #FFF;
}
`

const ModalTitle = styled.h2`
color: #1D1D1D;
font-family: Jost;
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const ModalLink = styled.label`
text-decoration: none;
color: #1D1D1D;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 1.5; /* 150% */
display: inline-block;
cursor: pointer;
`

const ModalHide = styled.input`
  opacity: 0;
  position: absolute;
  top: -99999px;
  left: -99999px;
`

const ModalTextDrag = styled.span`
text-decoration: none;
color: #1D1D1D;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 1.5; /* 150% */
display: inline-block;
`

const ModalContent = styled.div`
position: relative;
padding: 100px 20px 20px 20px;
width: 50%;
height: 100%;
border-radius: 20px;
background: #F8F8F7;
margin-left: auto ;
`

const ModalIconContainer = styled.div`
width: 100%;
height: 320px;
border-radius: 20px;
border: 2px dashed #FBE0DC;
background: #FFF;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${upload});
background-repeat:no-repeat;
background-position: 50% 50%;
margin-bottom: 20px;
`

const ModalIconTextInfo = styled.p`
color: #8C8C8C;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
display: inline-block;
`
const ModalIconTextInfoSpan = styled.span`
color: #FF868E;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
display: inline-block;
`


export {
    ModalHide,
    ModalCloseBtn,
    ModalIconTextInfoSpan,
    ModalTextDrag,
    ModalLink,
    ModalTitle,
    ModalIconTextInfo,
    ModalIconContainer,
    ModalIconImage,
    ModalContainer,
    ModalContent
}