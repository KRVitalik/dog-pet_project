import React, { useState } from 'react'
import { VotingCatImage, VotingImageInfoContainer, VotingMainContainer, VotingButtonInfo, VotingButtonVoteContainer, VotingButtonVoteLike, VotingButtonVoteFavorites, VotingButtonVoteDislike, VotingButtonVoteSvg, VotingList, VotingListContainer, VotingCatImageBtnPosition, VotingListTime, VotingListSvg, VotingListTextStyle, VotingListIdStyle } from './Voting.styled'
import icon from '../assets/symbol.svg'
import { useDispatch, useSelector } from 'react-redux';
import { dislike, favorites, historyActivity, like } from '../../store/catSlice';
import Search from '../Search/Search';
import BackButton from '../BackButton/BackButton';
import VotingButton from '../VotingButton/VotingButton';
import { showImageToVoteOn } from '../API/getBreeds';

const Voting = () => {
    const dispatch = useDispatch()
    const actionLogs = useSelector(state => state.myCat.historyActivity);
const [catImage, setCatImage] = useState([])
    
    if(catImage.length === 0){showImageToVoteOn().then((data) => {
                setCatImage(data)
            });}

    function handleButtonVoteClick(e) {
        let date = new Date();
        let time = date.getHours() + ":" + date.getMinutes();
        if (e.currentTarget.value === 'like') {
            showImageToVoteOn().then((data) => {
                setCatImage(data)
            });
            if(actionLogs.find(img => img.id === catImage[0].id)){return}
            dispatch(like(catImage))
            dispatch(historyActivity({
                id: catImage[0].id,
                value: 'like',
                icon: 'smile',
                fill: ' #97EAB9',
                time,
            }))
        }
        else if (e.currentTarget.value === 'favorites') {
            showImageToVoteOn().then((data) => {
                setCatImage(data)
            });
            if(actionLogs.find(img => img.id === catImage[0].id)){return}
            dispatch(favorites(catImage))
            dispatch(historyActivity({
                id: catImage[0].id,
                value: 'favorites',
                icon: 'heart',
                fill: '#FF868E',
                time,
            }))
            
        }
        else if (e.currentTarget.value === 'dislike') {
            showImageToVoteOn().then((data) => {
                setCatImage(data)
            });
            if(actionLogs.find(img => img.id === catImage[0].id)){return}
            dispatch(dislike(catImage))
            dispatch(historyActivity({
                id: catImage[0].id,
                value: 'dislike',
                icon: 'bad',
                fill: '#FFD280',
                time,
            }))
        }
    };

    return (
        <VotingMainContainer>
            <Search />
            <VotingImageInfoContainer>
                <VotingButtonInfo>
                    <BackButton />
                    <VotingButton/>
                </VotingButtonInfo>
                <VotingCatImageBtnPosition>
                    {catImage.map((cat) => <VotingCatImage key={cat.id} src={cat.url} alt="" />)}
                    <VotingButtonVoteContainer>
                        <li>
                            <VotingButtonVoteLike value='like' onClick={handleButtonVoteClick} type='submit'>
                                <VotingButtonVoteSvg width="30" height="30">
                                    <use href={icon + '#smile'}></use>
                                </VotingButtonVoteSvg>
                            </VotingButtonVoteLike></li>
                        <li>
                            <VotingButtonVoteFavorites value='favorites' onClick={handleButtonVoteClick} type='submit'>
                                <VotingButtonVoteSvg width="30" height="30">
                                    <use href={icon + '#heart'}></use>
                                </VotingButtonVoteSvg>
                            </VotingButtonVoteFavorites></li>
                        <li>
                            <VotingButtonVoteDislike value='dislike' onClick={handleButtonVoteClick} type='submit'>
                                <VotingButtonVoteSvg width="30" height="30">
                                    <use href={icon + '#bad'}></use>
                                </VotingButtonVoteSvg>
                            </VotingButtonVoteDislike></li>
                    </VotingButtonVoteContainer>
                </VotingCatImageBtnPosition>
                <VotingListContainer>
                    {actionLogs.map((actionLog) => <VotingList key={actionLog.id}>
                        <VotingListTime>{actionLog.time}</VotingListTime>
                        <VotingListTextStyle>{'image ID:'}&emsp;</VotingListTextStyle>
                        <VotingListIdStyle>{actionLog.id}</VotingListIdStyle>
                        <VotingListTextStyle>&emsp;{'was add to'}</VotingListTextStyle>
                        <VotingListSvg fill={actionLog.fill} width="20" height="20">
                            <use href={icon + `#${actionLog.icon}`}></use>
                        </VotingListSvg></VotingList>)}
                </VotingListContainer>
            </VotingImageInfoContainer>
        </VotingMainContainer>
    )
};

export default Voting