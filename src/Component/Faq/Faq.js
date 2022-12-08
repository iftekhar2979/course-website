import React from 'react';
import SingleFaq from './SingleFaq';

const Faq = () => {
    const faqs=[
        {
            faqQuestion:"What is online learning like?",
            answer:`For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people. Point out that there are different types of online courses and programs, and that they’ll have to decide which is best for them. Then, explain the types of courses you offer and how your online programs work to give them all the information they need. This not only gives them information, but it increases their trust because you’re being transparent and giving them straightforward answers. 

            `
        },
        {
            faqQuestion:`Can I learn at my own pace?
            `,
            answer:`This is another common question that people have about online courses. There are usually self-paced programs and traditional classroom or meeting-style programs available. Today’s world is full of busy people that want to better themselves, so the self-paced programs are popular. Whether or not you provide this option, be sure to answer this question for people and explain the pros and cons of each type of learning. As a bonus, you can even invite them to contact you for more information or to discuss what their options are. `
        },{
            faqQuestion:`Are you accredited or licensed by educational organizations?`,
            answer:`There isn’t always a need for licensing or accreditation for online courses. However, some programs do require it. Either way, people will usually ask what type of training or background you have, as well as any licensing that’s available if that’s relevant. Make sure that you answer this question by telling them if you do hold any licenses or accreditation, as well as by explaining whether or not those are needed, and why. It gives them the confidence that you have the right experience and boosts your credibility because you’re offering additional information for the sake of education alone. `
        },
        {
            faqQuestion:` Does online learning really work?`,
            answer:`There’s always a skeptic, and when it comes to online learning, there are often several of them. Everyone wants to know if online courses “really work”—and that’s a hard question to answer because there are several factors to consider. On a general basis, yes, online learning can be effective. However, that depends on whether the courses are set up properly, the provider is educated and experienced, and if the person taking the courses does well in a virtual learning environment. You should be able to explain these things to people so that they know what they’re getting into. Then, you can invite them to contact you to discuss whether it would be right for them. `
        }
    ]

  return (
    <section className='dark:bg-gray-800 dark:text-gray-100'>
      <div className='container flex flex-col justify-center p-4 mx-auto md:p-8'>
        <p className='p-2 text-sm font-medium tracking-wider text-center uppercase'>
          How it works
        </p>
        <h2 className='mb-12 text-4xl font-bold leading-none text-center sm:text-5xl'>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
            {
                faqs.map((item,index)=><SingleFaq key={index} data={item}></SingleFaq>)
            }
        </div>
      </div>
    </section>
  );
};

export default Faq;
