import {useEffect, useState} from 'react';

const WindowMeasure = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [color, setColor] = useState('blue');

  const handleMouseMove = (e) => {
    setX(e.offsetX);
    setY(e.offsetY)
    if(e.offsetX > window.innerWidth/2){
      setColor('tomato');
    }else{
      setColor('blue');
    }
  }
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return() => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })
  
  return(
    <div className='measure-box' style={{backgroundColor: color}}>
      <p>I am now on X: {x} and Y: {y}</p>
    </div>
  )
}
export default WindowMeasure;