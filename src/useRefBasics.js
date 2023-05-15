import React, { useEffect } from 'react'
import {useRef} from 'react'

const UseRefBasics = () => {

    const refContainer =useRef(null)
    const divContainer = useRef(null);
const handleSubmit=(e)=>{
e.preventDefault();
console.log(refContainer.current.value);
}
useEffect(()=>{
 console.log(refContainer.current);
 refContainer.current.focus()   
})


return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={refContainer}/>
        <button type='submit'>Add</button>
      </form>
      <div ref={divContainer}>Hello world </div>
    </div>
  )
}

export default UseRefBasics
