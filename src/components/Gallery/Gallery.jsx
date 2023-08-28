import {  VotingHeadButton } from '../Voting/Voting.styled';
import React, { useState } from 'react'
import icon from '../assets/symbol.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds } from '../API/breedsAPI';
import { imagesOfBreeds, modal } from '../../store/catSlice';
import { GalleryBackBtnContainer, GalleryBtnLoadNew, GalleryBtnUpload, GalleryFormContainer, GalleryLabel, GalleryLabelContainer, GalleryLimitUploadBtnContainer, GalleryMainContainer, GallerySelect, GallerySelectLimit, GalleryUploadBtnContainer } from './Gallery.styled';
import ImageList from '../ImageList/ImageList';
import Search from '../Search/Search';
import { GalleryType, galleryBreedSort, limitPerPage } from '../assets/galleryOptions';
import { getAllBreedsName, getCurrentBreedType } from '../API/getBreeds';
import { ButtonBackIcon } from '../BackButton/BackButton.styled';
import BackButton from '../BackButton/BackButton';
import { BreedsContainer } from '../Breeds/Breeds.styled';


const Gallery = () => {
  const dispatch = useDispatch()
  const [breedsNames, setBreedName] = useState([])
      const modalValue = useSelector(state => state.myCat.modal);

  if (breedsNames.length === 0) {
    getAllBreedsName().then((data) => {
      setBreedName(data.data)
    });
    getBreeds().then((data) => {
        dispatch(imagesOfBreeds(data))
      });
  };

  const handleBtnSubmitGallery = (e) => {
    e.preventDefault()
    const option = {
      order: e.target.order.value,
      type: e.target.type.value,
      breed: e.target.breed.value,
      quantity: e.target.quantity.value
    };

    getCurrentBreedType(option)
      .then((data) => {
        dispatch(imagesOfBreeds(data.data))
      });
  };

  
  const handleModalClick = () => {
    dispatch(modal(!modalValue))
  }

  return (
    <BreedsContainer>
      <Search />
      <GalleryMainContainer>
        <GalleryUploadBtnContainer>
          <GalleryBackBtnContainer>
            <BackButton />
            <VotingHeadButton type='button' >GALLERY</VotingHeadButton>
          </GalleryBackBtnContainer>
          <GalleryBtnUpload type='button' onClick={handleModalClick}>
            <ButtonBackIcon width="15.8" height="16">
              <use href={icon + '#upload'}></use>
            </ButtonBackIcon>UPLOAD</GalleryBtnUpload>
        </GalleryUploadBtnContainer>
        <GalleryFormContainer  onSubmit={handleBtnSubmitGallery}>
          <GalleryLabelContainer>
            <GalleryLabel htmlFor="order">ORDER</GalleryLabel>
            <GallerySelect name="order">
              {galleryBreedSort.map((el) => <option key={el.value} value={el.value}>{ el.title }</option>)}
            </GallerySelect>
          </GalleryLabelContainer>
          <GalleryLabelContainer>
            <GalleryLabel htmlFor="type">TYPE</GalleryLabel>
            <GallerySelect name="type">
              {GalleryType.map((el)=><option key={el.value} value={el.value}>{ el.title}</option>)}
            </GallerySelect>
          </GalleryLabelContainer>
          <GalleryLabelContainer>
            <GalleryLabel htmlFor="breed">BREED</GalleryLabel>
            <GallerySelect name="breed">
              <option value="random">None</option>
              {breedsNames.map((breedName) => <option key={breedName.id}  value={breedName.id}>{breedName.name}</option>)}
            </GallerySelect>
          </GalleryLabelContainer>
          <GalleryLimitUploadBtnContainer>
            <GalleryLabelContainer>
              <GalleryLabel htmlFor="quantity">LIMIT</GalleryLabel>
              <GallerySelectLimit name="quantity">
                {limitPerPage.map((el) => <option key={el.value} value={el.value}>{el.title}</option>)}
              </GallerySelectLimit>
            </GalleryLabelContainer>
            <GalleryBtnLoadNew type="submit">
              <ButtonBackIcon width="20" height="20">
                <use href={icon + '#update'}></use>
              </ButtonBackIcon>
            </GalleryBtnLoadNew>
          </GalleryLimitUploadBtnContainer>
        </GalleryFormContainer>
        <ImageList />
      </GalleryMainContainer>
      </BreedsContainer> 
  )
};

export default Gallery