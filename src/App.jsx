import './App.css'
import Post from './components/Post/post'
import Wallpaper from './components/Wallpaper/Wallpaper';
import { postdata } from './Data/posts'
import { wallpaperdata } from './Data/wallpaper';
//import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function App() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5// Avanzar de 5 en 5 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 
    }
      
  };

  const responsiveWall = {
    General: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
    }
  };


  /*const [posts, setPosts] = useState(postdata)

  useEffect(() => {
    const rawPosts = localStorage.getItem('posts');
    if (!rawPosts) {
      localStorage.setItem('posts', JSON.stringify(posts))
    } else {
      setPosts(JSON.parse(rawPosts))
    } 
  }, [])*/

  return (
    <>
    <h1>
      Esta es una prueba Carrusel
    </h1>
    <p>Se presentará dos Carruseles: </p>
    <Carousel responsive={responsiveWall} infinite={true} autoPlay={true} autoPlaySpeed={3000} showDots={true}>
    {
      wallpaperdata.map( (item) => <Wallpaper{...item} key={item.Wallpaper}/>)
    }
    </Carousel>
    <Carousel 
    responsive={responsive}
    draggable={false}
    showDots={true}
    infinite={true}
    
    >
    {
      postdata.map( (item) => <Post {...item} key={item.imagen}/>)
    }
    </Carousel>
    </>
  )
}

export default App
