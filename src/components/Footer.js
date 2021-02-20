import React from 'react';

const Footer = ({theme, setTheme}) => {
    // Utility functions
    const clearLocalStorage = () => {
        localStorage.clear();
        setTimeout(() => { 
            window.location.reload("true");
        }, 0);
    }
    const changeTheme = (event) => {
        event.preventDefault();
        if (theme === 'Dark'){
            setTheme('Colorful');
        }
        else{
            setTheme('Dark');
        }
    };

    let nextTheme = (theme === "Dark" ? "Colorful" : "Dark");

    return(
        <div className='footer'>
            <button onClick={clearLocalStorage} className='clear-all'>
                CLEAR
            </button>
            <button onClick={changeTheme} className={`${nextTheme === "Dark" ? 'theme-selector-dark' : 'theme-selector-colorful'}`}>
                {nextTheme}
            </button>
        </div>
    )
}

export default Footer; 