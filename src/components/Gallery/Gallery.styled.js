import styled from 'styled-components';
import { ButtonBackIcon } from '../BackButton/BackButton.styled';

const GalleryMainContainer = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
width: 680px;
height: auto;
border-radius: 20px;
background: #FFF;
padding: 20px;
gap: 20px;
box-sizing: border-box;
`

const GalleryBtnUpload = styled.button`
width: 143px;
height: 40px;
display: flex;
justify-content: space-between;
border-radius: 10px;
background: #FBE0DC;
border: 0;
color: #FF868E;
text-align: center;
font-family: Jost;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 1.33; /* 133.333% */
letter-spacing: 2px;
padding: 12px 30px;
cursor: pointer;
&:hover{
    background: #FF868E;
    color: #FFF;
}
&:hover ${ButtonBackIcon}{
    fill: #FFF;
}
`

const GalleryUploadBtnContainer = styled.div`
display:flex;
justify-content: space-between;
`

const GalleryBackBtnContainer = styled.div`
display:flex;
gap: 10px;
`

const GalleryFormContainer = styled.form`
display: flex;
flex-wrap: wrap;
row-gap: 10px;
column-gap: 20px;
margin: 0;
width: 640px;
height: 156px;
flex-shrink: 0;
border-radius: 20px;
background: #F8F8F7;
padding: 10px 20px 20px 20px;
box-sizing: border-box;
`

const GallerySelect = styled.select`
width: 290px;
height: 40px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
color: #1D1D1D;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
border: 0;
`

const GalleryLabelContainer = styled.div`
display: flex;
flex-direction: column;
`
const GalleryLabel = styled.label`
color: #8C8C8C;
font-family: Jost;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 1.8; /* 180% */
`

const GallerySelectLimit = styled.select`
width: 240px;
height: 40px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
color: #1D1D1D;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
border: 0;
`

const GalleryLimitUploadBtnContainer = styled.div`
display:flex;
align-items: end;
gap: 10px;
`

const GalleryBtnLoadNew = styled.button`
display:flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 10px;
background: #FFF;
border: 0;
`


export {
    GalleryBtnUpload,
    GalleryUploadBtnContainer,
    GalleryBackBtnContainer,
    GalleryFormContainer,
    GallerySelect,
    GalleryLabelContainer,
    GalleryLabel,
    GalleryLimitUploadBtnContainer,
    GallerySelectLimit,
    GalleryBtnLoadNew,
    GalleryMainContainer,
};