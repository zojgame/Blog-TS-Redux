import { store } from "./store"

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

type ConvertedPost = Post & {
    likes: number,
    dislikes: number,
    isLiked: boolean,
    isDisliked: boolean
}

type Posts = Post[]

type ConvertedPosts = ConvertedPost[]

type InitialState = {
    posts: ConvertedPosts
}

type State = ReturnType<typeof store.getState>

type ApiDispatch = typeof store.dispatch

export type{ Post, InitialState, Posts, State, ApiDispatch, ConvertedPosts, ConvertedPost }