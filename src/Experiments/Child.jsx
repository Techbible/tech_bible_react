import React from 'react'
import { forwardRef, useImperativeHandle } from 'react';

const Child = forwardRef((props, ref) => {
    const hello = (name)=>{
        alert(name)
    }

/********************************Malking the methods exportable START***************************** */
    // create our ref object
    const publicRef = {
        // Referencing our methods
        hello : hello
      };
  
    // pass the ref and a function that returns our object
    useImperativeHandle(ref, () => publicRef);
  
/********************************Malking the methods exportable END******************************* */
  return (
    <div>
      
    </div>
  )
});

export default Child
