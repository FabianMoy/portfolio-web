import React, { useEffect, useRef } from 'react'
import {FaHandshake} from 'react-icons/fa'
import { FormContactMe } from '../ui/FormContactMe'
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ContactMe = () => {

    const contacRef = useRef(null);
    const refSelector = gsap.utils.selector(contacRef);

    useEffect(() => {

        gsap.from(refSelector('.itemAnimated'), {
            scrollTrigger:{
                trigger: contacRef.current,
                toggleActions: "restart none none none",
            },
                opacity: 0,
                scale: 0,
                stagger: 0,
                duration:0.8})
    
    },[refSelector])

    return (
        <div ref={contacRef} id='contacMe' className='portfolio__contact-container'>
            <p className='portfolio__contact-title itemAnimated'>
                Contact me
            </p>
            <div className='portfolio__skillset-line itemAnimated'></div>
            <div className='portfolio__contact-form-wrapper itemAnimated'>
                    <div className='portfolio__contact-form-iconAside itemAnimated'>
                    <FaHandshake />
                    <h3> Thank you</h3>
                    <p>Do you have any queries?</p>
                    </div>
                    <FormContactMe />
            </div>
        </div>
    )
}
