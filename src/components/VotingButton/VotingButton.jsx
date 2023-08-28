import React from 'react'
import { VotingHeadButton } from './VotingButton.styled'
import { imageToVote } from '../../store/catSlice'
import { useDispatch } from 'react-redux'
import { showImageToVoteOn } from '../API/getBreeds'

const VotingButton = () => {
    const dispatch = useDispatch();
    
        function handleVotingClick() {
        showImageToVoteOn().then((data) => {
            dispatch(imageToVote(data))
        })
    }
  return (
    <VotingHeadButton onClick={handleVotingClick} type='button'>VOTING</VotingHeadButton>
  )
}

export default VotingButton