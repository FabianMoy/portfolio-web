import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonCV } from '../ui/ButtonCV';

gsap.registerPlugin(ScrollTrigger);

export const AboutScreen = () => {
    
    const aboutRef = useRef(null);
    const refSelector = gsap.utils.selector(aboutRef);

    useEffect(() => {
   
        gsap.from(refSelector('*'), {
            scrollTrigger:{
                trigger: aboutRef.current,
                toggleActions: "restart none none none",
            },
                opacity: 0,
                scale: 0,
                stagger: 0,
                duration:0.8})
        
    },[refSelector])


    return (
        <div ref={aboutRef} id='about' className='portfolio__about-container'>
            <p className='portfolio__about-title'>
            About me
            </p>
            <div className='portfolio__line-with-style' ></div>
        <div className='portfolio__about-body'>
            <div className='portfolio__about-body_text'>
            <p>
            Hi i'm Fabian Moyeda, a self-taught front-end developer highly passionate and professional.
            <br/>
            <br/>
            My passion has always been software developer, but above all creating a simple
            and attractive design for those whoever use it, that create a good user experience.
            <br/>
            <br/>
            I'm excited that we create the applications of the future!
            </p>
            </div>
            <ButtonCV />
        </div>
        </div>
    )
}
