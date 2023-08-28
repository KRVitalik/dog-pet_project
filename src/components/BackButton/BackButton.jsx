import React, { useRef } from 'react'
import icon from '../assets/symbol.svg'
import { ButtonBack, ButtonBackIcon } from './BackButton.styled';
import { Link, useLocation } from 'react-router-dom';

const BackButton = () => {

    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/')
    
    return (
        <Link to={backLinkLocationRef.current}>
            <ButtonBack type='button'>
                <ButtonBackIcon width="20" height="20">
                    <use href={icon + '#back'}></use>
                </ButtonBackIcon>
            </ButtonBack>
        </Link>
    )
};

export default BackButton