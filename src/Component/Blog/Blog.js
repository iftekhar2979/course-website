import React from 'react';
import SingleBlog from './SingleBlog';

const Blog = () => {
    const object = [
        {
          question: 'What is Cors?',
          image:
            'https://cdn.hashnode.com/res/hashnode/image/upload/v1599591569159/Ylc2deIBk.png',
          answer:
            "Cors stand's for cross origin resource sharing .It allows us to relax the security to an API.This is done by passing the Access-Allow-Origin headers, which specify which origin can acces by api.",
        },
        {
          question: 'Why are you using Firebase?',
          image: 'https://firebase.google.com/images/social.png',
          answer:
            'The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience',
        },
        {
          question: 'What other options do you have to implement authentication?',
          image:
            'https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/10/si-advanced-authentication-feature.jpg.webp',
          answer:
            'There are 12 different type of authentication system we can emplement. the authentication systems runs for auth like firebase.',
        },
        {
          question: 'How does private route work?',
          image: 'https://i.ytimg.com/vi/99RWZsEITx4/maxresdefault.jpg',
          answer:
            'The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property',
        },
        {
          question: 'what is node js?',
          answer: `Node.js is an open-source, cross-platform, 
        back-end JavaScript runtime environment 
        that runs on the V8 engine and executes
        JavaScript code outside a web browser.
        `,
          image:
            'https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png',
        },
        {
          question: 'How does Node js work?',
          image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--4BjMqsdN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4anecy5mdl4pho8w7519.jpg',
          answer:
            'It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.',
        },
      ];
    return (
        <section className='grid grid-cols-3 gap-4 pt-6 dark:bg-gray-800 dark:text-gray-100 p-6'>
                
            {object.map((item,index)=><SingleBlog key={index} data={item}></SingleBlog>)}
            
        </section>
    );
};

export default Blog;