import {useEffect, useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    document.addEventListener('mousedown', incrementCount);
    return() => {
      document.removeEventListener('mousedown', incrementCount);
    }
  })

  return(
    <div className='counter'>
      <span>{count}</span>
    </div>
  )
}
export default Counter;