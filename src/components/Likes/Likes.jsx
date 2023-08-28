import BackButton from '../BackButton/BackButton'
import Search from '../Search/Search'
import React from 'react'
import { LikesHeadContainer, LikesTitle } from './Likes.styled'
import { BreedsMainContainer } from '../Breeds/Breeds.styled'
import { ImageListElement, ImageListElementImg, ImageLists } from '../ImageList/ImageList.styled'
import { useSelector } from 'react-redux'
import { NoImgText } from '../Dislike/Dislike.styled'

const Likes = () => {
    const catImages = useSelector(state => state.myCat.like);
    
  return (
      <div>
            <Search />
      <BreedsMainContainer>
      <LikesHeadContainer>
          <BackButton />
          <LikesTitle>LIKES</LikesTitle>
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

export default Likes