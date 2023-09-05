import { ConvertedPost, ConvertedPosts, State } from "../types";
import { REDUCERS } from "../consts";

const getPosts = (state: State) : ConvertedPosts => state[REDUCERS.POSTS_REDUCER].posts

const getCurrentPost = (state: State) : ConvertedPost => state[REDUCERS.POSTS_REDUCER].currentPost

export { getPosts, getCurrentPost }
