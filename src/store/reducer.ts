import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types";

const initialState : InitialState = {
    posts: []
}

const postsReducer = createSlice({
    name: 'postsReducer',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const { setPosts } = postsReducer.actions
export { postsReducer } 