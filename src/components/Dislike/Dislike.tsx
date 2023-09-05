import './styles.scss'
import { ConvertedPost } from '../../types';
import { getPosts, setPosts } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';

interface DislikeComponentProps{
   post: ConvertedPost
}

const DislikeComponent = ({post} : DislikeComponentProps) => {
    const fill = post?.isDisliked ? '#ea5757' : ''
    const displatch = useAppDispatch()
    const posts = useAppSelector(getPosts)

    const handleOnDislikeClick = () => {
        let updatedPost = {...post, dislikes: post.dislikes - 1, isDisliked: false}
        if(!post?.isDisliked){
            if(post.isLiked){
                updatedPost = {...post, dislikes: post.dislikes + 1, isDisliked: true, isLiked: false, likes: post.likes - 1}
            }            
            else{
                updatedPost = {...post, dislikes: post.dislikes + 1, isDisliked: true}
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
    <div className='dislike' onClick={handleOnDislikeClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path style={{fill: `${fill}`}} d="M2.66665 5.33333H5.33331C6.06665 5.33333 6.66665 5.93333 6.66665 6.66666V18.6667C6.66665 19.4 6.06665 20 5.33331 20H2.66665V5.33333ZM29.1066 14.8267C29.2533 15.16 29.3333 15.52 29.3333 15.8933V17.3333C29.3333 18.8 28.1333 20 26.6666 20H19.3333L20.56 26.2C20.6266 26.4933 20.5866 26.8133 20.4533 27.08C20.1466 27.68 19.76 28.2267 19.28 28.7067L18.6666 29.3333L10.12 20.7867C9.61331 20.28 9.33331 19.6 9.33331 18.8933V8.45333C9.33331 6.73333 10.7333 5.33333 12.4533 5.33333H23.2533C24.2 5.33333 25.0666 5.82666 25.5466 6.62666L29.1066 14.8267Z" fill="#3A3541" fill-opacity="0.54"/>
        </svg>
        <div>
            {post?.dislikes}            
        </div>     
    </div>
   );
};

export { DislikeComponent }