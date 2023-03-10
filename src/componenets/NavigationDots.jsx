import React from 'react'

function NavigationDots({ active }) {

    const links = ['home', 'about', 'work', 'skills', 'testimonials', 'contact'];

    return (
        <div className='app__navigation'>
            {links.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#313BAC' } : {}} />
            ))}
        </div>
    )
}

export default NavigationDots;