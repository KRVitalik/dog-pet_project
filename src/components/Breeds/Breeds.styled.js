import styled from 'styled-components';

const BreedsMainContainer = styled.div`
display: flex;
gap: 20px;
width: 680px;
border-radius: 20px;
background: #FFF;
padding: 20px 20px 20px 20px;
flex-direction: column;
box-sizing: border-box;
`;

const BreedBtnContainer = styled.div`
display: flex;
justify-content: center;
gap: 10px;
`;

const GridElementOptions = styled.select`
color: #8C8C8C;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
padding: 8px 10px;
width: 226px;
height: 40px;
flex-shrink: 0;
border-radius: 10px;
background: #F8F8F7;
border: 0;
`

const BreedForm = styled.form`
display: flex;
`


const GridElementOptionsLimit = styled.select`
color: #8C8C8C;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
padding: 8px 10px;
width: 101px;
height: 40px;
border-radius: 10px;
background: #F8F8F7;
border: 0;
margin-left: 10px;
`

const BreedButtonIconSort = styled.svg`
fill: #8C8C8C;
`



const BreedButtonSort = styled.button`
width: 40px;
height: 40px;
border-radius: 10px;
background: #F8F8F7;
border: 0;
&:hover{
    border: 2px solid #FBE0DC;
}
&:hover ${BreedButtonIconSort}{
    fill: #FF868E;
}
`
const BreedsHeadButton= styled.button`
width: 143px;
height: 40px;
flex-shrink: 0;
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
border: 0;
`
const BreedsName = styled.p`
position: absolute;
bottom: 10px;
right: 10px;
width: 180px;
height: 34px;
border-radius: 10px;
background: #FFF;
display: flex;
align-items: center;
justify-content: center;

color: #FF868E;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
visibility: hidden;
opacity: 0;

`

const BreedsNameContainer = styled.div`
position: relative;
`

export {
    BreedsNameContainer,
    BreedsName,
    BreedForm,
    BreedsHeadButton,
    BreedBtnContainer,
    BreedsMainContainer,
    BreedButtonSort,
    GridElementOptions,
    GridElementOptionsLimit,
    BreedButtonIconSort
}