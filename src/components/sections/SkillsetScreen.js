import React, { useEffect, useRef } from 'react';
import svgIcons from '../../helpers/svgIconsImport';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'React',
    'Redux',
    'Git',
    'Bootstrap',
    'Sass',
    'Firebase',
    'Gsap',
    'npm',
    'VisualStudio',
    'Jest',
    'Node'
]

export const SkillsetScreen = () => {
    
    const skillsetRef = useRef(null)
    const refSelector = gsap.utils.selector(skillsetRef);

    useEffect(() => {
   
        gsap.from(refSelector('.itemAnimated'), {
            scrollTrigger:{
                trigger: skillsetRef.current,
                toggleActions: "restart none none none",
            },
                scale: 0,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8})
        
        },[refSelector])
            
            
    
    return (
        <div ref={skillsetRef} id='skillset' className='portfolio__skillset-container'>
            <p className='portfolio__skillset-title itemAnimated'>
            Skillset
            </p>
            <div className='portfolio__skillset-line itemAnimated'></div>
            <div className='portfolio__skillset-wrapper itemAnimated'>
                {
                skills.map( (skill,index) => 
                    (
                    <div className='portfolio__skillset-skill itemAnimated' key={index}>
                    <img 
                        src={svgIcons[skill]}
                        alt={skill}    
                    />
                    <span>{skill}</span>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
