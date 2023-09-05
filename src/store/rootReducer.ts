import { combineReducers } from '@reduxjs/toolkit'; 
import { postsReducer } from './reducer';

export const rootReducer = combineReducers({
    'postsReducer': postsReducer.reducer
})