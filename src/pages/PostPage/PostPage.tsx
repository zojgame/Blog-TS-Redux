import { useNavigate } from "react-router-dom";
import { useAppSelector, usePostId } from "../../hooks";
import { getPosts } from "../../store";
import { LikeComponent, DislikeComponent } from "../../components";
import { ConvertedPost } from "../../types";
import './styles.scss'

const PostPage = () => {
    const postId = usePostId()    
    const posts = useAppSelector(getPosts)
    const currentPost = posts.find((post) => post.id === postId) as ConvertedPost
    const navigate = useNavigate()

    function onBackBtnClick(): void {
        navigate(`../`)
    }

    return (
       <div className="post_page">
            <nav>
                <a onClick={onBackBtnClick} className="go_back_btn">                    
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z" fill="#0A0A0A"/>
                    </svg>                    
                    <div>Вернуться к статьям</div></a>

                <div className="interactive">
                    <LikeComponent post={currentPost} /> 
                    <DislikeComponent post={currentPost} />
                </div>
            </nav>
            <div className="content">
                <h1>{currentPost.title}</h1>
                <div>
                    <img src="https://placehold.co/848x477" alt="изображение" />
                    {currentPost.body}
                </div>
            </div>
       </div>
    );

};

export { PostPage }