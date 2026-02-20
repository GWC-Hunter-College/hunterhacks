// When passing values to the FAQ
// the question should be be passed
// in as a prop

// The answer should be enclosed within the
// Tags of the parent element as the answer
// can be dynamic in form <p> or <ul> idk

import {useRef} from 'react';
import './FAQ.css'

import PlusIcon from '../assets/plus.svg'

function FAQ(
    {
        question,
        children
    }
)
{
    const faqRef=useRef(null);

    // onclick function that reveals/hides answer 
    const toggleAnswer = () => {
        faqRef.current.classList.toggle('answer-reveal')
    }
    return(
        <div ref={faqRef} className="faq-wrapper">
            <div onClick={()=>toggleAnswer()} className='question-container'>
                <h3>{question || "caaa"}</h3>
                <img className="question-icon"src={PlusIcon} 
                alt="+" draggable="false"
                ></img>
            </div>

            <div 
                className='answer-container'
            >
                {children || <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>}
            </div>
        </div>
    );
}
export default FAQ