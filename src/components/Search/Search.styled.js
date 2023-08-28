import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SearchFormBtnContainer = styled.div`
display: flex;
gap: 10px;
margin-bottom: 10px;
`;

const SearchForm = styled.form`
position: relative;
display: flex;
height: 60px;
width: 470px;
`;

const SearchBtnIcon = styled.svg`
fill: #FF868E;
`;

const SearchBtnElement = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
border: 0;

&:hover{
    background: #FBE0DC;
}
&.active {
    background: #FF868E;
}
&.active ${SearchBtnIcon}{
        fill: #FFF;
        background-color: #FF868E;
    color: #FFF;
}
`;

const SearchInput = styled.input`
width: 470px;
border-radius: 20px;
background: #FFF;
color: #8C8C8C;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
padding: 15px 20px;
border: 2px solid #FFF;
&:hover{
border: 2px solid #FBE0DC;
}
&:focus {
border: 2px solid #FF868E;
color: #1D1D1D;
}
`;

const SearchBtnContainer = styled.ul`
display: flex;
gap: 10px;
`;

const SearchBtnSearch = styled.button`
position: absolute;
top: 10px;
right: 10px;
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
flex-shrink: 0;
border-radius: 10px;
background: #FBE0DC;
border: 0;
`;

export {SearchForm, SearchFormBtnContainer, SearchBtnIcon, SearchBtnElement, SearchInput, SearchBtnContainer, SearchBtnSearch}