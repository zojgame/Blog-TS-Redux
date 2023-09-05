import { createSlice } from "@reduxjs/toolkit";
import { InitialState, ConvertedPost } from "../types";

const initialCurrentPost : ConvertedPost = {
    userId: -1,
    id: -1,
    title: "",
    body: "",
    isDisliked: false,
    isLiked: false,
    likes: 0,
    dislikes: 0
}

const initialState : InitialState = {
    posts: [],
    currentPost: initialCurrentPost
}

const postsReducer = createSlice({
    name: 'postsReducer',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        }
    }
})

export const { setPosts, setCurrentPost } = postsReducer.actions
export { postsReducer } 