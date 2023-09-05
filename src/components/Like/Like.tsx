import './styles.scss'
import { ConvertedPost } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setPosts, getPosts } from '../../store';

interface LikeComponentProps{
   post: ConvertedPost
}

const LikeComponent = ({post} : LikeComponentProps) => {
    const fill = post?.isLiked ? '#219652' : ''
    const displatch = useAppDispatch()
    const posts = useAppSelector(getPosts)

    const handleLikeClick = () => {
        let updatedPost = {...post, likes: post.likes - 1, isLiked: false}
        if(!post?.isLiked){
            if(post.isDisliked){
                updatedPost = {...post, likes: post.likes + 1, isLiked: true, isDisliked: false, dislikes: post.dislikes - 1}
            }            
            else{
                updatedPost = {...post, likes: post.likes + 1, isLiked: true}
            }
        }

        const updatedPosts = posts.map((p) => {
            if(p.id !== post.id){
                return p
            }

            return updatedPost            
        })
        
        displatch(setPosts(updatedPosts))
    }

    return (
        <div className="like" onClick={handleLikeClick}>
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={{fill: `${fill}`}} d="M2.66669 27.1667H5.33335C6.06669 27.1667 6.66669 26.5667 6.66669 25.8334V13.8334C6.66669 13.1 6.06669 12.5 5.33335 12.5H2.66669V27.1667ZM29.1067 17.6734C29.2534 17.34 29.3334 16.98 29.3334 16.6067V15.1667C29.3334 13.7 28.1334 12.5 26.6667 12.5H19.3334L20.56 6.30002C20.6267 6.00669 20.5867 5.68669 20.4534 5.42002C20.1467 4.82002 19.76 4.27335 19.28 3.79335L18.6667 3.16669L10.12 11.7134C9.61335 12.22 9.33335 12.9 9.33335 13.6067V24.06C9.33335 25.7667 10.7334 27.1667 12.4534 27.1667H23.2667C24.2 27.1667 25.08 26.6734 25.56 25.8734L29.1067 17.6734Z" fill="#959298"/>
            </svg>
            <div>
                {post?.likes}            
            </div>    
        </div>
   );
};

export { LikeComponent }