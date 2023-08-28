import React, { Suspense, useState } from 'react'
import { SearchForm, SearchFormBtnContainer, SearchBtnIcon, SearchBtnElement, SearchInput, SearchBtnContainer, SearchBtnSearch } from './Search.styled'
import icon from '../assets/symbol.svg'
import { currentBreedsName, imagesOfBreeds } from '../../store/catSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchBreeds } from '../API/breedsAPI'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import Modal from '../Modal/Modal'

const Search = () => {
    const modalValue = useSelector(state => state.myCat.modal);
    const location = useLocation();
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate();

    function handleSubmitForm(e) {        
        e.preventDefault();
        setSearchValue('')

    navigate('/search');
        getSearchBreeds(searchValue)
            .then((data) => {
                dispatch(imagesOfBreeds(data.data))
                dispatch(currentBreedsName(searchValue))
            });
    }

    function handleInputChange(e) {
        setSearchValue(e.target.value)
    }
    

  return (
      <>
        {modalValue && <Modal/>}
      <SearchFormBtnContainer>
                <SearchForm onSubmit={handleSubmitForm}>
                    <SearchInput value={searchValue} onChange={handleInputChange} placeholder='Search for breeds by name' type="text" />
              <SearchBtnSearch  type='submit'>
                        <SearchBtnIcon width="20" height="20">
                            <use href={icon + '#search'}></use>
                        </SearchBtnIcon>
                  </SearchBtnSearch>
                </SearchForm>
                <SearchBtnContainer>
                    <li>
                        <SearchBtnElement state={{ from: location }} to='/likes' type='button'>
                            <SearchBtnIcon width="30" height="30">
                                <use href={icon + '#smile'}></use>
                            </SearchBtnIcon>
                        </SearchBtnElement>
                    </li>
                    <li>
                        <SearchBtnElement state={{ from: location }} to='/favourites' type='button'>
                            <SearchBtnIcon width="30" height="30">
                                <use href={icon + '#heart'}></use>
                            </SearchBtnIcon>
                        </SearchBtnElement>
                    </li>
                    <li>
                        <SearchBtnElement state={{ from: location }} to='/dislike' type='button'>
                            <SearchBtnIcon width="30" height="30">
                                <use href={icon + '#bad'}></use>
                            </SearchBtnIcon>
                        </SearchBtnElement>
                    </li>
                </SearchBtnContainer>
      </SearchFormBtnContainer>
            <Suspense fallback={<Spinner/>}>
                <Outlet />
          </Suspense>
      </>
  )
}

export default Search