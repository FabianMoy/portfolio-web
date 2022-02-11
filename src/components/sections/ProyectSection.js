import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProyectSection = () => {

    const proyectRef = useRef(null);
    const refSelector = gsap.utils.selector(proyectRef);
    
    useEffect(() => {
        
        gsap.from(refSelector('*'), {
            scrollTrigger:{
                trigger: proyectRef.current,
                toggleActions: "restart none none none",
            },
            opacity: 0,
            scale: 0,
            stagger: 0,
            duration:0.8})
            
    },[refSelector])


    return (
        <div ref={proyectRef} id='proyects' className='portfolio__proyects-container'>
            <p className='portfolio__proyects-title'>
                Proyects
            </p>
            <div className='portfolio__line-with-style'></div>
            <div className='portfolio__proyects-wrapper'>
                <div className='portfolio__proyect-item'>
                    <div className='portfolio__proyect-item__picture'></div>
                    
                </div>
                <div className='portfolio__proyect-item'>
                    <div className='portfolio__proyect-item__picture'></div>
                    
                </div>
                <div className='portfolio__proyect-item'>
                    <div className='portfolio__proyect-item__picture'></div>
                </div>
            </div>
        </div>
    )
}
