import axios from "axios"
import { URL_POSTS } from "."

const getPostsById = (id: string) => {
    const url = `${URL_POSTS}/${id}`
    const result = axios.get(url)

    return result
}

export { getPostsById }