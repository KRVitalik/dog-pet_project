import BackButton from '../BackButton/BackButton'
import Search from '../Search/Search'
import React from 'react'
import { BreedsMainContainer } from '../Breeds/Breeds.styled'
import { ImageListElement, ImageListElementImg, ImageLists } from '../ImageList/ImageList.styled'
import { useSelector } from 'react-redux'
import { DislikesTitle, NoImgText } from './Dislike.styled'
import { LikesHeadContainer } from '../Likes/Likes.styled'

const Dislikes = () => {
    const catImages = useSelector(state => state.myCat.dislike);

  return (
      <div>
            <Search />
      <BreedsMainContainer>
      <LikesHeadContainer>
          <BackButton />
          <DislikesTitle>DISLIKES</DislikesTitle>
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

export default Dislikes;