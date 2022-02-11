import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import {FaGithub, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa'

gsap.registerPlugin(TextPlugin, ExpoScaleEase, RoughEase, SlowMo);

export const HeroScreen = () => {
    
    const words = ["Frontend Developer.", "Software engineer in process.", "Fullstack trainee." ]
   
    const boxRef = useRef();
    const textRef = useRef();
    const cursorRef = useRef();
    const nameRef = useRef();

    const masterTl = gsap.timeline({repeat: -1}).pause()
    const boxTl = gsap.timeline()
    
    useEffect(() => {
        
        //cursor animation
        gsap.to(cursorRef.current, {
            opacity:0, 
            ease: "power2.inOut", 
            repeat:-1})
        
        //Name animation
        boxTl.from(nameRef.current, {
            duration:2, 
            opacity:0, 
            ease: "power3.out"})
        
        //Dinamic text animation
        boxTl.to(boxRef.current, {
            duration:0.5, 
            height:"7vw", 
            ease: "elastic.out", 
            onComplete: () => masterTl.play() })
        
        words.forEach(word => {
            const tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
            tl.to(textRef.current, {duration: 1, text: word})
            masterTl.add(tl)
        })
    })
    
    return (
        <div id="home" className='p-hero'>
            <div className='p-hero__img' ></div>
            <div className='p-hero__container'>
                <div className='p-hero__profile-picture'></div>
                    <h2 ref={nameRef} className='name' >Fabian Moyeda</h2>
                    <h2 className='dinamicText mb-1'>
                        <span ref={boxRef} className="box"></span>
                        <span ref={textRef} className="text"></span>
                        <span ref={cursorRef} className="cursor">|</span>
                    </h2>
                <div className='social-media__icons'>
                    <a href='https://wa.link/hf40dy' className="whatsapp-icon" target='_BLANK'  rel="noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href='https://github.com/FabianMoy' className="github-icon" target='_BLANK'  rel="noreferrer">
                        <FaGithub />                        
                    </a>     
                    <a href='https://www.linkedin.com/in/fabian-moyedaga/' className="linkedin-icon" target='_BLANK'  rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </div>
    )
}
