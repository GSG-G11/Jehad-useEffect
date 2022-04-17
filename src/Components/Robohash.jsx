import {useEffect, useState} from 'react';

const Robohash = () => {
  const [inputValue, setInputValue] = useState('cat');
  const [imageLink, setImageLink] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    
    fetch(`https://robohash.org/${inputValue}`, {
      signal: abortController.signal,
    })
      .then((data) => setImageLink(data.url))
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, [inputValue]);

  return (
    <div className='robohash'>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
      />
      <img src={imageLink} alt="images" />
    </div>
  );
};

export default Robohash;