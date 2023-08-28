import styled from 'styled-components';

const VotingMainContainer = styled.div`

height: 100vh;
width: 50%;
margin-left: auto;
`;

const VotingCatImage = styled.img`
width: 640px;
height: 360px;
flex-shrink: 0;
border-radius: 20px;
    object-fit: cover;
    margin-bottom: 52px;
`;

const VotingCatImageBtnPosition = styled.div`
position:relative;
`;

const VotingImageInfoContainer = styled.div`
position: relative;
width: 680px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
box-sizing: border-box;
`;

const VotingButtonInfo = styled.div`
display: flex;
gap: 10px;
align-self: start;
margin-bottom:20px;
`;

const VotingHeadButton = styled.button`
width: 146px;
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
`;

const VotingButtonVoteContainer = styled.ul`
position: absolute;
bottom:0;
left: 50%;
transform: translate(-50%, -20%);
display:flex;
width: 248px;
height: 80px;
border-radius: 20px;
justify-content: space-around;
overflow: hidden;
background-color: #FFF;
border: 2px solid #FFF;
`;

const VotingButtonVoteSvg = styled.svg`
fill: #FFF;
`;

const VotingButtonVoteLike = styled.button`
display:flex;
width: 80px;
height: 80px;
background-color: #97EAB9;
justify-content: center;
align-items: center;
border: 2px solid transparent;
&:hover{
    background-color: rgb(151 234 185 / 30%);
}
&:hover ${VotingButtonVoteSvg}{
        fill: #97EAB9;
}
`;

const VotingButtonVoteFavorites = styled.button`
display:flex;
width: 80px;
height: 80px;
background-color: #FF868E;
justify-content: center;
align-items: center;
border: 2px solid transparent;
&:hover{
    background-color: rgb(255 134 142 / 30%);
}
&:hover ${VotingButtonVoteSvg}{
        fill: #FF868E;
}
`;

const VotingButtonVoteDislike = styled.button`
display:flex;
width: 80px;
height: 80px;
background-color: #FFD280;
justify-content: center;
align-items: center;
border: 2px solid transparent;
&:hover{
    background-color: rgb(255 210 128 / 30%);
}
&:hover ${VotingButtonVoteSvg}{
        fill: #FFD280;
}
`;


const VotingListContainer = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;

`;
const VotingList = styled.li`
display: flex;
align-items: center;
width: 640px;
height: 60px;
border-radius: 10px;
background: #F8F8F7;
padding:0 20px 0 25px;
box-sizing: border-box;
`;

const VotingListTime = styled.span`
display: flex;
align-items: center;
justify-content: center;
width: 61px;
height: 30px;
border-radius: 5px;
background: #FFF;
padding: 3px 10px;
margin-right: 20px;
`

const VotingListTextStyle = styled.span`
color: #8C8C8C;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
`;

const VotingListSvg = styled.svg`
margin-left: auto;
`

const VotingListIdStyle = styled.span`
color: #1D1D1D;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
`

export {
    VotingListIdStyle,
    VotingListTextStyle,
    VotingListSvg,
    VotingCatImageBtnPosition,
    VotingList,
    VotingListContainer,
    VotingButtonVoteSvg,
    VotingButtonVoteDislike,
    VotingButtonVoteFavorites,
    VotingButtonVoteLike,
    VotingButtonVoteContainer,
    VotingHeadButton,
    VotingButtonInfo,
    VotingImageInfoContainer,
    VotingMainContainer,
    VotingCatImage,
    VotingListTime,
}