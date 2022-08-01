import {useEffect, useState} from 'react';

const API_KEY= import.meta.env.VITE_GIPHY_API;

const useFetch =({keyword}) => {
    const [gifUrl, setGifUrl] = useState("");

    const fetchGifs = async () => {
        try {
            const response=await fetch('https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")&limit=1}')
            const {data }= await response.json();
            setGifUrl(data[0]?.images.downsized_medium?.url)
        } catch (error) {
            setGifUrl('https://imgs.search.brave.com/gUsJ41-VlK7KSx_t17SMzYHcYivcpJ8WQZwpWq8QNI8/rs:fit:450:253:1/g:ce/aHR0cHM6Ly9lc2No/ZXJnaXJscy5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy8yMDIw/LTA1L2FuaW1lJTIw/Ym9vYnMlMjAxLmdp/Zg.gif')
        }
    }

    useEffect(() => {
      if(keyword) fetchGifs();
    }, [keyword])

    return gifUrl;
    
}
export default useFetch;