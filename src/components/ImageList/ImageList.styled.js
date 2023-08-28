import styled from 'styled-components';

const ImageLists = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
`;

const ImageListElement = styled.li`
border-radius: 20px;
background: #C4C4C4;
overflow: hidden;
height: 300px;
`

const ImageListElementImg = styled.img`
width: 200px;
height: 300px;
object-fit: cover;
`

export {ImageLists, ImageListElement, ImageListElementImg}