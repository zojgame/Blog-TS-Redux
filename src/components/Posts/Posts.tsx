import { useAppSelector } from "../../hooks";
import { getPosts } from "../../store";
import { DislikeComponent, LikeComponent } from "../";
import './styles.scss';
import { useNavigate } from "react-router-dom";

const PostsComponent = () => {
    const posts = useAppSelector(getPosts)
    const currentPost = posts?.[0]
    const navigate = useNavigate()

    function onBtnReadMoreClick(id: number) {

        return () => {
            navigate(`${id}`)
        }
    }

    return (
        <div className="posts_container">
            <div className="current_post post">
                <img src="https://placehold.co/1140x600" alt="изображение" />
                <div className="activities">
                    <h2>{currentPost?.title}</h2>
                    <div className="interactive">
                        <LikeComponent post={currentPost} /> 
                        <DislikeComponent post={currentPost} />
                    </div>                    
                </div>
                <p className="content">{currentPost?.body}</p>
                <button onClick={onBtnReadMoreClick(currentPost?.id)}>Читать далее</button>
            </div>
            <div className="posts">
                {posts.slice(1, 5).map((post) => {
                    return(
                        <div className="post" key={post.id}>
                            <img src="https://placehold.co/558x273" alt="изображение" />
                                <h2>{post?.title}</h2>
                            <div className="activities">
                                <div className="interactive">
                                    <LikeComponent post={post} /> 
                                    <DislikeComponent post={post} />
                                </div>
                                <button onClick={onBtnReadMoreClick(post?.id)}>Читать далее</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export { PostsComponent }