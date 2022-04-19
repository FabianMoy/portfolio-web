import React from 'react';

export const ButtonCV = () => {

    return (
        <a
            href='https://drive.google.com/uc?export=download&id=117orLv2JIWVjKLCjN2o_i9ti6AynsLW'
            className='portfolio__download-cv__container'
            download='resumecv.pdf'
        >
            <div className='portfolio__download-cv__logo-cv'></div>
            <div className='portfolio__download-cv__text-wrapper'>
                <p>RESUME (CV)</p>
                <p>Download</p>
            </div>
        </a>
        )
};
