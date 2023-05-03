import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener on component mount
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return <div className='text-white text-xl mt-20'>Screen Width: {screenWidth}</div>;
};

export default MyComponent;