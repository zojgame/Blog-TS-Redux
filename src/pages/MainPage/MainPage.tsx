import './styles.scss'
import { SearchComponent, PostsComponent } from '../../components';

const MainPage = () => {   

   return (
        <div className="main-page">
            <h1>Блог</h1>
            <p>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
            <SearchComponent />
            <PostsComponent />
        </div>
   );
};

export { MainPage }