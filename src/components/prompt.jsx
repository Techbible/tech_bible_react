import React, { useState,useRef,useEffect } from 'react';
import "../assets/styles/Card.css";
import { CopyToClipboard } from "react-copy-to-clipboard";


function  Card({content}) 
{
  const[value,setValue]=useState('')
  const [copied,setCopied]=useState(false);
 
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Reset "copied" state after 1.5 seconds to hide the message
  };
  const [truncatedText, setTruncatedText] = useState(content?.promptext);
  const textContainerRef = useRef(null);
  const maxCharacterLength =80; // Change this to your desired maximum character length


  useEffect(() => {
    if (content?.promptext.length > maxCharacterLength) {
      setTruncatedText(content?.promptext.slice(0, maxCharacterLength) + '...');
    } else {
      setTruncatedText(content?.promptext);
    }
  }, [content?.promptext]);
  
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
      
          <div className="Action " > {content?.Action}</div>
          
          <button className='infos' > View prompt </button> 
        </div>
        <div className="flip-card-back">
          <div className="prompt " > {truncatedText}</div>
          <CopyToClipboard text={content?.promptext} onCopy={handleCopy}>
          
          <button className='copy-button'> {copied ? 'Copied!' : 'Copy prompt'} </button>
           </CopyToClipboard>
           
          <div >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
