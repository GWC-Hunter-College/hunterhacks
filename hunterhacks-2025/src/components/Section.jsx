// This component is the section component
// Each important section should be wrapped by this
// Component so the navigation-bar can identify it

// to pass in content like a <p> tag or any other custom component
// just pass it as a child and 


import {useEffect} from 'react'
import './Section.css'

function Section({title, ref, children})
{
    // element ref for navigation 
	// as well as observer bringing it into view via css
    const elementRef = ref
    
    
	useEffect(()=>{
		// if a browser has motion off, just bring in the
		// section without animation
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) {
			elementRef.current.classList.add('section-reveal');
			return;
			}

		// reveal elements that are in frame
		const observer = new IntersectionObserver((entries) =>{
			entries.forEach((entry) => {
				if(entry.isIntersecting){
				entry.target.classList.add('section-reveal');
				}
			})
		});

		// add this section to the revelable elements list
		const hiddenElements = elementRef.current
		observer.observe(hiddenElements)

		return () => observer.disconnect(); // prevent memory leaks
	},[]);

    return(
        <div ref={elementRef} className="section">
            <h2 className='section-header'>
                {title}
            </h2>

            
            {children}

        </div>
    );
} export default Section
