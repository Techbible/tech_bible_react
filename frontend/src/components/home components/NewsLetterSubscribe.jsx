import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsLetter from './NewsLetter';
import React from 'react';
const NewsLetterSubscribe = ()=>{

    const MAILCHIMP_URL = "https://mytechbible.us20.list-manage.com/subscribe/post?u=514819d0faeb47c146cc29d6e&amp;id=f90a15fd1b&amp;f_id=00a84fe6f0"
    return(
      <div>
   
        <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <NewsLetter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
      </div> 
      
    )



};

export default NewsLetterSubscribe;