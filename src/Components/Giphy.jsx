import {useEffect, useState} from 'react';

const Giphy = () => {
  const [searchInput, setSearchInput] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&limit=10&api_key=h5RyXmhN31ZwAcxmcZCfxjCjBg7hgpXf`,{
      signal: abortController.signal
    }).then((data) => data.json())
    .then(({data}) => setImages(data.map((img) => img.images.original.url)))
    .catch((err) => console.log(err));

      return () => abortController.abort();
  }, [searchInput])

  return(
    <div className='giphy'>
      <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      <div>
        {images.map(image => <img src={image} alt='images'/>)}
      </div>
    </div>
  )
}
export default Giphy;