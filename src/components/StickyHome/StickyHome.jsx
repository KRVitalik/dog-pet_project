import React from 'react'
import { StickyBreedsContainer, StickyButton, StickyButtonContainer, StickyImageBtn, StickyLogoContainer, StickyMainContainer, StickyPostTitle, StickySearchContainer, StickyTitle, StickyVoteContainer, StickyWelcomeText } from './StickyHome.styled';
import vote_img from '../../images/vote-table.png'
import pet_breeds from '../../images/pet-breeds.png'
import images_search from '../../images/images-search.png'
import paw from '../../images/paw.svg'
import PetsPaw from '../../images/PetsPaw.svg'
import { useLocation } from 'react-router-dom';

const StickyHome = () => {
const location = useLocation();

    return (
        <StickyMainContainer>
            <a href="/">
                <StickyLogoContainer><img src={paw} alt="" />
                    <img src={PetsPaw} alt="" /></StickyLogoContainer>
            </a>
            <StickyTitle>Hi!👋</StickyTitle>
            <StickyWelcomeText>Welcome to MacPaw Bootcamp 2023</StickyWelcomeText>
            <StickyPostTitle>Lets start using The Cat API</StickyPostTitle>
            <StickyButtonContainer>
                <StickyImageBtn>
                    <StickyVoteContainer>
                        <img src={vote_img} alt="" />
                    </StickyVoteContainer>
                    <StickyButton state={{ from: location }} to="voting" type='button'>VOTING</StickyButton>
                </StickyImageBtn>
                <StickyImageBtn>
                    <StickyBreedsContainer>
                        <img src={pet_breeds} alt="" />
                    </StickyBreedsContainer>
                    <StickyButton state={{ from: location }} to="breeds" type='button'>BREEDS</StickyButton>
                </StickyImageBtn>
                <StickyImageBtn>
                    <StickySearchContainer>
                        <img src={images_search} alt="" />
                    </StickySearchContainer>
                    <StickyButton state={{ from: location }} to="gallery" type='button'>GALLERY</StickyButton>
                </StickyImageBtn>
            </StickyButtonContainer>
        </StickyMainContainer>
    )
};

export default StickyHome