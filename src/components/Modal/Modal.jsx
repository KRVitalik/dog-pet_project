import React from 'react'
import { ModalCloseBtn, ModalContainer, ModalContent, ModalHide, ModalIconContainer, ModalIconImage, ModalIconTextInfo, ModalIconTextInfoSpan, ModalLink, ModalTextDrag, ModalTitle } from './Modal.styled'
import { modal } from '../../store/catSlice';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../assets/symbol.svg'


const Modal = () => {
      const dispatch = useDispatch()
    const modalValue = useSelector(state => state.myCat.modal);
    
    const handleClick = (e) => {
        e.target.tagName === 'SECTION' && dispatch(modal(!modalValue))
        e.currentTarget.tagName === "BUTTON" && dispatch(modal(!modalValue))
    }
    
    const handleEscape = (e) => {
        e.code === 'Escape' && dispatch(modal(!modalValue))
    }

  return (
      <ModalContainer onKeyDown={handleEscape}  onClick={handleClick}>
          <ModalContent >
          <ModalCloseBtn onClick={handleClick} type='button'>
              <ModalIconImage width="17" height="17">
              <use href={icon + '#close'}></use>
            </ModalIconImage>
          </ModalCloseBtn>
              <ModalTitle>Upload a .jpg or .png Cat Image</ModalTitle>
              <ModalIconTextInfo>Any uploads must comply with the <ModalIconTextInfoSpan>&nbsp;upload guidelines&nbsp;</ModalIconTextInfoSpan> or face deletion.</ModalIconTextInfo>
              <ModalIconContainer>
                  <ModalIconTextInfo><ModalTextDrag>Drag here&nbsp;</ModalTextDrag> your file or <ModalLink>Click here<ModalHide type="file" /></ModalLink> to upload</ModalIconTextInfo>
              </ModalIconContainer>
              <ModalIconTextInfo>No file selected</ModalIconTextInfo>
          </ModalContent>
    </ModalContainer>
  )
}

export default Modal