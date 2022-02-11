import React from 'react'
import { AboutScreen } from './sections/AboutScreen'
import { ContactMe } from './sections/ContactMe'
import { FooterSection } from './sections/FooterSection'
import { HeroScreen } from './sections/HeroScreen'
import { ProyectSection } from './sections/ProyectSection'
import { SkillsetScreen } from './sections/SkillsetScreen'
import { NavBar } from './ui/NavBar'

export const Sections = () => {

    return (
        <>
            <NavBar />
            <HeroScreen />
            <AboutScreen />
            <SkillsetScreen />
            <ProyectSection />
            <ContactMe />
            <FooterSection/>
        </>
    )
}
