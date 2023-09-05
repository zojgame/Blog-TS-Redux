import { Posts, ConvertedPost, ConvertedPosts } from "./types"

enum REDUCERS{
    POSTS_REDUCER = 'postsReducer'
} 

const ConvertPosts = (posts: Posts) => {
    const convertedPosts : ConvertedPosts = posts.map((post) => {

        const convertedPost : ConvertedPost = {
            ...post,
            likes: Math.round((Math.random() * 50)),
            dislikes: Math.round((Math.random() * 50)),
            isLiked: false,
            isDisliked: false             
        }

        return convertedPost
    })

    return convertedPosts
}

export { REDUCERS, ConvertPosts }