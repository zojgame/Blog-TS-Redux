import { ChangeEvent, useState } from 'react';
import searchIcon from '../../assets/search.png'
import { getPostsById } from '../../api';
import { useNavigate } from 'react-router-dom';
import './styles.scss'

const SearchComponent = () => {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        setInputValue(event.target.value)
    }

    function handleOnSearchClick(): void {
        if(inputValue !== ''){
            getPostsById(inputValue).then((res) => 
            {
                navigate(`${res.data.id}`)
            })            
        }
    }

    return (
        <>
            <div className='input_wrapper'>
                <img src={searchIcon} className="search_icon" onClick={handleOnSearchClick}/>
                <input type="text" placeholder="Поиск по названию статью" className='input' onChange={handleInputChange}/>
            </div>        
        </>
    );
};

export { SearchComponent }