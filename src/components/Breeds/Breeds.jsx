import React, { useEffect, useState } from 'react'
import icon from '../assets/symbol.svg'
import { BreedsMainContainer, BreedButtonIconSort, GridElementOptions, GridElementOptionsLimit, BreedButtonSort, BreedBtnContainer, BreedsHeadButton, BreedForm, BreedsName, BreedsNameContainer, BreedsContainer } from './Breeds.styled';
import Search from '../Search/Search';
import BackButton from '../BackButton/BackButton';
import { getAllBreedsName, getCurrentBreed } from '../API/getBreeds';
import { ImageListElement, ImageListElementImg, ImageLists } from '../ImageList/ImageList.styled';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentBreedsName } from '../../store/catSlice';


const Breeds = () => {
    const dispatch = useDispatch()
    const [catOption, setCatOption] = useState({})
    const [breedsNames, setBreedName] = useState([])
    const [currentBreed, setCurrentBreed] = useState([])

    const handleBreedClick = (e) => {
        dispatch(currentBreedsName(e.target.name))
    }
    
        const handleBreedSelect = (e) => {
        dispatch(currentBreedsName(e.target.value))
    }

useEffect(() => {
    if(breedsNames.length=== 0)
    getAllBreedsName().then((data) => {
        setBreedName(data.data);
    });
}, [breedsNames.length]);  
    
    const handleBreedsClick = (e) => {
        let option = {
            ...catOption,
            [e.target.name]: e.target.value,
        };
        setCatOption(option)
    };


    useEffect(() => {
        getCurrentBreed(catOption)
            .then((data) => {
                setCurrentBreed(data.data)
            });
    }, [catOption]);

    const handleSortClick = (e) => {
        setBreedName([...breedsNames].sort((a, b) => a.name.localeCompare(b.name)))
    }

        const handleSortRevertClick = (e) => {
        setBreedName([...breedsNames].sort((a, b) => b.name.localeCompare(a.name)))
    }
    
    return (
        <BreedsContainer>
            <Search />
            <BreedsMainContainer>
                <BreedBtnContainer>
                    <BackButton />
                    <BreedsHeadButton type='button'>BREEDS</BreedsHeadButton>
                    <BreedForm onChange={handleBreedsClick}>
                        <label htmlFor="breed">
                            <GridElementOptions onChange={handleBreedSelect} defaultValue='all' name="breed">
                                <option value="all">All breeds</option>
                            {breedsNames.map((breedName) => <option key={breedName.id}  value={breedName.id}>{breedName.name}</option>) }
                        </GridElementOptions>
                    </label>
                    <label htmlFor="quantity">
                        <GridElementOptionsLimit defaultValue='5' name="quantity">
                            <option value="5">Limit: 5</option>
                            <option value="10" >Limit: 10</option>
                            <option value="15" >Limit: 15</option>
                            <option value="20">Limit: 20</option>
                        </GridElementOptionsLimit>
                    </label>
                    </BreedForm>
                    <BreedButtonSort onClick={handleSortClick}>
                        <BreedButtonIconSort width="20" height="20">
                        <use href={icon + '#sort-color'}></use>
                    </BreedButtonIconSort>
                    </BreedButtonSort>
                    <BreedButtonSort onClick={handleSortRevertClick}>
                        <BreedButtonIconSort width="20" height="20">
                        <use href={icon + '#sort-revert'}></use>
                        </BreedButtonIconSort>
                    </BreedButtonSort>
                </BreedBtnContainer>
                <ImageLists>
                    {currentBreed.length === 0 ? breedsNames.map((image) =>
                        <ImageListElement key={image.id} >
                            <Link to='info'>
                                {image.image
                                    ? <BreedsNameContainer>
                                        <ImageListElementImg onClick={handleBreedClick} name={image.id} src={image.image.url} alt={image.name} />
                                        <BreedsName>{image.name}</BreedsName>
                                    </BreedsNameContainer>
                                    : <div onClick={handleBreedClick}><svg width="200" height="300">
                                    <use href={icon + '#iconUpload'}></use>
                                </svg></div>}
                            </Link>
                        </ImageListElement>
                    ) : currentBreed.map((image) =>
                        <ImageListElement key={image.id} >
                            <Link to='info'>
                                <ImageListElementImg name={image.id} src={image.url} alt="" />
                                </Link>
                        </ImageListElement>)}
            </ImageLists>
            </BreedsMainContainer>
        </BreedsContainer>
    )
};

export default Breeds