import React from 'react';

export const FooterSection = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='portfolio__footerContainer'>
            <p>Developed and designed by Fabian Moyeda. &#169;{year}. All rights reserved.</p>
        </div>
    )
};
