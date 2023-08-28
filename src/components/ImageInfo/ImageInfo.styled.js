import styled from 'styled-components';


const ImageInfoTitle = styled.h2`
display: flex;
align-items: center;
justify-content: center;
width: 143px;
height: 40px;
border-radius: 10px;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 1.5; /* 150% */
letter-spacing: 2px;
border: 0;
color: #FF868E;
background: #FBE0DC;
`;

const ImageInfoBreedID = styled.p`
display: flex;
align-items: center;
justify-content: center;
width: 90px;
height: 40px;
border-radius: 10px;
background: #FF868E;
color: #FFF;
text-align: center;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 1.5; /* 150% */
letter-spacing: 2px;
`;

const ImageInfoCat = styled.img`
display: block;
width: 640px;
height: 360px;
border-radius: 20px;
background:lightgray;
object-fit: cover;
`

const ImageInfoContainer = styled.div`
position: relative;
width: 640px;
height: 204px;
border-radius: 20px;
border: 2px solid #FBE0DC;
margin-top: 51px;
margin-bottom: 75px;
padding: 26px 40px 40px 40px;
`;

const ImageInfoMainTitle = styled.p`
position: absolute;
top: -31px;
left: 50%;
height: 62px;
/* min-width: 193px; */
border-radius: 20px;
background: #FFF;
color: #1D1D1D;
font-family: Jost;
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
transform: translate(-50%);
`

const ImageInfoPostTitle = styled.p`
text-align: center;
color: #8C8C8C;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 20px;

`
const ImageInfoSliderContainer = styled.ul`
width: 640px;
height: 100%;
`

const ImageInfoBreedsContainer = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px 20px;
`

const ImageInfoBreeds = styled.li`
width: 268px;
display: inline-flex;
gap: 10px;
align-items:baseline;
`

const ImageInfoBreedsInformation = styled.span`
color: #8C8C8C;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const ImageInfoBreedsTitleStyle = styled.div`
color: #1D1D1D;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export {
    ImageInfoBreedsInformation,
    ImageInfoBreedsContainer,
    ImageInfoBreedsTitleStyle,
    ImageInfoBreeds,
    ImageInfoMainTitle,
    ImageInfoContainer,
    ImageInfoSliderContainer,
    ImageInfoPostTitle,
    ImageInfoCat,
    ImageInfoBreedID,
    ImageInfoTitle,
}