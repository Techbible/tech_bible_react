import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsLetter from './NewsLetter';
import React from 'react';
const NewsLetterSubscribe = ()=>{

    const MAILCHIMP_URL = "https://techbible.us21.list-manage.com/subscribe/post?u=a4c0ecb1c96b3943c5951a86a&amp;id=a42f1faad9&amp;f_id=004e54e1f0"
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