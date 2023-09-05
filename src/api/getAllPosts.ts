import axios from "axios"
import { URL_POSTS } from "."

const getAllPosts = () => {
    const result = axios.get(URL_POSTS)

    return result
}

export { getAllPosts }