// When using this funciton
// Please pass sections as an array
// Using an object form with two member variables
// sectionName -> string that will show up in the nav
// sectionRef -> reference to the section to scroll to

import './NavbarMobile.css'
import './Navbar.css'
import HambergerIcon from '../assets/menu.svg'
import {useRef, useEffect} from 'react';

function Navbar({
    sectionArray,
    scrollFunction
})
{
    const sidebarRef = useRef(null); 

    const sidebarIconRefs = useRef([]);

    const trainbarIconRefs = useRef([]);
    const trainbarTrailRefs = useRef([]);

    // function to handle scrolling on page
    // used for navbar decoration and closing the sidebar
    const handleScroll = () => {
        // check if each section has been passed, if so, decorate it in nav/side
        sectionArray.forEach((section, index) => {
            const rect = section.sectionRef.current?.getBoundingClientRect();
            const trainbarCircle = trainbarIconRefs.current[index].querySelector('circle');
            const sidebarCircle = sidebarIconRefs.current[index];
            
            if (rect?.top < 100) {
                trainbarCircle?.classList.add('trainbar-stop-icon-active');
                sidebarCircle?.classList.add('sidebar-stop-icon-active');
            } else {
                trainbarCircle?.classList.remove('trainbar-stop-icon-active');
                sidebarCircle?.classList.remove('sidebar-stop-icon-active');
            }
        });
        
        // handle scroll and event listener to close the sidebar on scroll
        if (!sidebarRef.current?.classList.contains("reveal")) return;

        sidebarRef.current.classList.remove('reveal');
    };
    const handleResize = () => {
        // check if each section has been passed, if so, decorate it in nav/side
        trainbarIconRefs.current.forEach((icon, index) => {
            // reset first
            icon.style.left = `${0}px`;
            
            const trail = trainbarTrailRefs.current[index];

            const trailRect = trail.getBoundingClientRect();
            const iconRect = icon.getBoundingClientRect();

            const trailCenterX = trailRect.left + trailRect.width / 2;
            const iconCenterX = iconRect.left + iconRect.width / 2;

            const offsetLeft = trailCenterX - iconCenterX;
            console.log(offsetLeft)

            // Now move source to that position

            // icon.style.left = `${500}px`;
            icon.style.left = `${offsetLeft}px`;
        });
    };


    // use effect to enable the scrolling listener once the page is loaded
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize()
        

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };    },[]);

    // returns two things
    // a navbar and a sidebar, only one should be
    // active at at time. css media query to handle visibility 
    return(
        <>
            <div className="topbar">
                {/* hamburger to open side bar */}
                <a id="Hamburger">
                    <img 
                        src={HambergerIcon} 
                        alt="Hamburger" 
                        onClick={()=>sidebarRef.current?.classList.toggle("reveal")}
                    ></img>
                </a>
            </div>
            
            {/* side bar for small screens */}
            <nav ref={sidebarRef} className='sidebar'>
            {
                // loop to make each navigational item (dynamic)
                sectionArray.map((section, index) => (
                    <a 
                        className="sidebar-item"
                        key={index}
                        onClick={() => scrollFunction(section.sectionRef)}
                    >
                        <div
                        className={[
                            'sidebar-div',
                            index === 0 && 'sidebar-front-div',
                            index === sectionArray.length - 1 && 'sidebar-back-div'
                        ].filter(Boolean).join(' ')}
                        >
                            <svg viewBox="0 0 12 12" width="11" height="11">
                            <circle 
                                ref={(el) => sidebarIconRefs.current[index] = el}
                                className="sidebar-stop-icon" 
                                cx="6" cy="6" r="5"  />
                            </svg>
                        </div>


                        <p style={{padding:"0rem .5rem"}}>
                            {section.sectionName}
                        </p>
                    </a>
                ))
            }     
            </nav>


            {/* navigation for big screens */}
            <nav className="trainbar">
                <p className='trainbar-header'>
                    STOPS
                </p>
                {
                    // loop to make each navigational item (dynamic)
                    sectionArray.map((section, index) => (
                        <a 
                            className="trainbar-item"
                            key={index}
                            onClick={() => scrollFunction(section.sectionRef)}
                        >
                            <div
                                ref={(el) => trainbarTrailRefs.current[index] = el}
                                className={[
                                    'trainbar-div',
                                    index === 0 && 'trainbar-front-div',
                                    index === sectionArray.length - 1 && 'trainbar-back-div'
                                ].filter(Boolean).join(' ')}
                                ></div>

                            <svg 
                                width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="trainbar-stop"
                                    ref={(el) => trainbarIconRefs.current[index] = el}
                                >
                                <circle 
                                    cx="10.5" cy="10.5" r="9" 
                                    // data-index={index}

                                    className="trainbar-stop-icon" // fill="black" 
                                    stroke="white" strokeWidth="3"/>
                            </svg> 

                            <p style={{padding:"0rem .5rem"}}>
                                {section.sectionName}
                            </p>

                        </a>
                    ))
                }
            </nav>
        </>
    );
}export default Navbar


