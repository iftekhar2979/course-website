import React from 'react';

const SingleFaq = ({data}) => {
    return (
        <div>
            <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">{data.faqQuestion}</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">{data.answer}</p>
			</details>
        </div>
    );
};

export default SingleFaq;