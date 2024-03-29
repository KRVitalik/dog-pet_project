import BackButton from '../BackButton/BackButton'
import { GalleryBackBtnContainer } from '../Gallery/Gallery.styled'
import Search from '../Search/Search'
import { VotingHeadButton } from '../Voting/Voting.styled'
import React from 'react'
import { SearchGalleryText } from './SearchGallery.styled'
import ImageList from '../ImageList/ImageList'
import { useSelector } from 'react-redux'
import { BreedsContainer } from '../Breeds/Breeds.styled'

const SearchGallery = () => {
    const breedQuery = useSelector(state => state.myCat.currentBreedsName);
    
  return (
      <BreedsContainer>
          <Search />
          <GalleryBackBtnContainer>
              <BackButton />
              <VotingHeadButton type='button' >SEARCH</VotingHeadButton>
          </GalleryBackBtnContainer>
          <p><SearchGalleryText>Search results for: { breedQuery }</SearchGalleryText> </p>
          <ImageList/>
      </BreedsContainer>
  )
}

export default SearchGallery