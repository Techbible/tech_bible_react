import React from 'react'
import { useRef } from 'react';
import Child from './Child';

const Parent = () => {
    /*****************************Importing Ready Methods START******************************* */
  // create a ref to pass
  const ChildRef = useRef(null);

//   const landingPage = <Child ref={ ChildRef } />;


  const wrapperFunction = () => {
    // check that the ref exists to avoid errors
    if (!ChildRef.current) return alert('ouf');

    ChildRef.current.hello();
  }


/*****************************Importing Ready Methods END******************************* */
  return (
    <div>
    <Child ref={ ChildRef } />
    <h1 style={{color:"#fff"}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Repellendus, distinctio, eum ad quia consequatur ab unde et autem sunt a incidunt dolorum. Dolore est exercitationem vel nesciunt et eaque ab.
     </h1>
     <button onClick={ () => ChildRef.current.hello("Mordred") }>Hello</button>
    </div>
  )
}

export default Parent
