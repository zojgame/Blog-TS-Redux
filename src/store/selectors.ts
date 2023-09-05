import { ConvertedPosts, State } from "../types";
import { REDUCERS } from "../consts";

const getPosts = (state: State) : ConvertedPosts => state[REDUCERS.POSTS_REDUCER].posts

export { getPosts }
