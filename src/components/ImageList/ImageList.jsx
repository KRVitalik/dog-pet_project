import React from 'react'
import { ImageListElement, ImageListElementImg, ImageLists } from './ImageList.styled';
import { useSelector } from 'react-redux';
import { BreedsContainer } from '../Breeds/Breeds.styled';

const ImageList = () => {
    const catImages = useSelector(state => state.myCat.imagesOfBreeds);

    return (
        <div>
            <ImageLists>
                {catImages.map((catImage) =>
                        <ImageListElement key={catImage.id}>
                            <ImageListElementImg src={catImage.url} alt="" />
                        </ImageListElement>
                    )}
            </ImageLists></div>
    )
};

export default ImageList