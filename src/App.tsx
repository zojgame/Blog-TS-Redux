import { useEffect } from "react";
import { getAllPosts } from "./api";
import { ConvertPosts } from "./consts";
import { MainPage, PostPage } from "./pages"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { setPosts } from "./store";
import { useAppDispatch } from "./hooks";

function App() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    getAllPosts().then(res => {
        const convertedPosts = ConvertPosts(res.data)
        dispatch(setPosts(convertedPosts))
    })

}, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}/>      
        <Route path='/:id' element={<PostPage />}/>      
      </Routes>
    </Router>
  )
}

export default App
