import BackButton from '../BackButton/BackButton'
import Search from '../Search/Search'
import React, { useEffect, useState } from 'react'
import { ImageInfoBreedID, ImageInfoBreeds, ImageInfoBreedsContainer, ImageInfoBreedsInformation, ImageInfoBreedsTitleStyle, ImageInfoCat, ImageInfoContainer, ImageInfoMainTitle, ImageInfoPostTitle, ImageInfoSliderContainer, ImageInfoTitle } from './ImageInfo.styled'
import { VotingButtonInfo } from '../Voting/Voting.styled'
import { getCatBreed } from '../API/getBreeds'
import { useSelector } from 'react-redux'
import { GalleryMainContainer } from '../Gallery/Gallery.styled'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageInfo = () => {
  const breedImages = useSelector(state => state.myCat.currentBreedsName);
  const [catsBreeds, setCatBreeds] = useState([])
  
    useEffect(() => {
    if (catsBreeds.length === 0) {
      getCatBreed(breedImages).then((data) => setCatBreeds(data.data));
    }
  }, [breedImages, catsBreeds.length]);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div>
      <Search />
      <VotingButtonInfo>
      <BackButton />
        <ImageInfoTitle>BREEDS</ImageInfoTitle>
        <ImageInfoBreedID>{breedImages}</ImageInfoBreedID>
      </VotingButtonInfo>
      <GalleryMainContainer>
        <ImageInfoSliderContainer>
        <Slider {...settings}>
            {catsBreeds.map((catImg)=><ImageInfoCat key={catImg.id}  src={catImg.url} alt="" />)}
      </Slider>
        </ImageInfoSliderContainer>
        <ImageInfoContainer>
          {catsBreeds.length !== 0 && <ImageInfoMainTitle>{catsBreeds[0].breeds[0].name}</ImageInfoMainTitle>}
          <ImageInfoPostTitle>Family companion cat</ImageInfoPostTitle>
          <ImageInfoBreedsContainer>
            <ImageInfoBreeds>
              {catsBreeds.length !== 0 && <ImageInfoBreedsTitleStyle>Temperament: <ImageInfoBreedsInformation>{catsBreeds[0].breeds[0].temperament}</ImageInfoBreedsInformation></ImageInfoBreedsTitleStyle>}
              </ImageInfoBreeds>
            <ImageInfoBreeds>
              {catsBreeds.length !== 0 && <><ImageInfoBreedsTitleStyle>Origin: </ImageInfoBreedsTitleStyle><ImageInfoBreedsInformation>{catsBreeds[0].breeds[0].origin}</ImageInfoBreedsInformation></>}
              </ImageInfoBreeds>
            <ImageInfoBreeds>
              {catsBreeds.length !== 0 && <><ImageInfoBreedsTitleStyle>Weight: </ImageInfoBreedsTitleStyle><ImageInfoBreedsInformation>{catsBreeds[0].breeds[0].weight.metric} kgs</ImageInfoBreedsInformation></>}
              </ImageInfoBreeds>
            <ImageInfoBreeds>
              {catsBreeds.length !== 0 && <><ImageInfoBreedsTitleStyle>Life span: </ImageInfoBreedsTitleStyle><ImageInfoBreedsInformation>{catsBreeds[0].breeds[0].life_span} years</ImageInfoBreedsInformation></>}
              </ImageInfoBreeds>
           </ImageInfoBreedsContainer>
        </ImageInfoContainer>
      </GalleryMainContainer>
    </div>
  )
}

export default ImageInfo