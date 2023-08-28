import BackButton from '../BackButton/BackButton'
import Search from '../Search/Search'
import React from 'react'
import { BreedsMainContainer } from '../Breeds/Breeds.styled'
import { ImageListElement, ImageListElementImg, ImageLists } from '../ImageList/ImageList.styled'
import { useSelector } from 'react-redux'
import { LikesHeadContainer } from '../Likes/Likes.styled'
import { FavouriteTitle } from './Favourites.styled'
import { NoImgText } from '../Dislike/Dislike.styled'

const Favourites = () => {
    const catImages = useSelector(state => state.myCat.favorites);
    
  return (
      <div>
            <Search />
      <BreedsMainContainer>
      <LikesHeadContainer>
          <BackButton />
          <FavouriteTitle>FAVOURITES</FavouriteTitle>
      </LikesHeadContainer>
          <ImageLists>
                  {catImages.length > 0
                      ? catImages.map((catImage) => <ImageListElement key={catImage.id}><ImageListElementImg src={catImage.url} alt="" /></ImageListElement>)
                      : <NoImgText>No item found</NoImgText>}
          </ImageLists>
          </BreedsMainContainer>
      </div>
  )
}

export default Favourites