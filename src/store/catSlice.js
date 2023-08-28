import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export const catSlice = createSlice({
    name: "myCat",
    initialState,
    reducers: {
        like(state, action) {
            state.like.push(...action.payload)
        },
        dislike(state, action) {
            state.dislike.push(...action.payload)
        },
        favorites(state, action) {
            state.favorites.push(...action.payload)
        },
        imageToVote(state, action) {
            state.imageToVote = action.payload
        },
        historyActivity(state, action) {
            state.historyActivity.push(action.payload)
        },
        imagesOfBreeds(state, action) {
            state.imagesOfBreeds = action.payload
        },
        currentBreedsName(state, action) {
            state.currentBreedsName = action.payload
        },
        modal(state, action){
            state.modal = action.payload
        },

    }
});

const persistConfig = {
    key: 'myCat',
    storage,
    blacklist: ['modal']
};

export const persistedReducer = persistReducer(persistConfig, catSlice.reducer)

export const {modal, currentBreedsName, breedsName, imagesOfBreeds, like, dislike, favorites, votingImage, imageToVote, historyActivity} = catSlice.actions;
export const contactReducer = catSlice.reducer;