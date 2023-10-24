import React from 'react';

function Header(){
    return(
        <header className='header--'>
            <h1 className='header--name'>Joaquin</h1>
            <h2 className='header--job-title'>Frontend Engineer</h2>
            <p className='header--email'>joaquin@live.com</p>
            <div className='header--contact-btns'>
                <div className='header--contact-btns--email'>
                    <i className="fa-solid fa-envelope"></i>
                    <p>Email</p>
                </div>
                <div className='header--contact-btns--linkedin'>
                    <i className="fa-brands fa-linkedin"></i>
                    <p>LinkedIn</p>
                </div>
            </div>
        </header>
    )
}

export default Header;