import React, { useRef } from 'react';
import './App.css';

export const replaceCamelWithSpaces = (colourName: string): string => {
    let colourNameArr: string[] = colourName.split('');
    return colourNameArr
        .map((letter, idx) => {
            if (letter === letter.toUpperCase() && idx !== 0) {
                return ` ${letter.toLowerCase()}`;
            }
            return letter;
        })
        .join('');
};

function App() {
    const btnRef = useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        if (
            btnRef.current!.style.backgroundColor.toLowerCase() ===
            'mediumvioletred'
        ) {
            btnRef.current!.style.backgroundColor = 'MidnightBlue';
            btnRef.current!.innerHTML = 'Change to Medium Violet Red';
        } else {
            btnRef.current!.style.backgroundColor = 'MediumVioletRed';
            btnRef.current!.innerHTML = 'Change to Midnight Blue';
        }
    };

    const toggleDisableBtn = (): void => {
        btnRef.current!.disabled = !btnRef.current!.disabled;
        if (btnRef.current!.disabled) {
            btnRef.current!.style.backgroundColor = 'grey';
            return;
        }
        if (btnRef.current!.innerHTML === 'Change to Medium Violet Red') {
            btnRef.current!.style.backgroundColor = 'MidnightBlue';
        } else {
            btnRef.current!.style.backgroundColor = 'MediumVioletRed';
        }
    };

    return (
        <div className='App'>
            <button
                ref={btnRef}
                style={{ backgroundColor: 'MediumVioletRed' }}
                onClick={handleClick}
            >
                Change to Midnight Blue
            </button>
            <input
                type='checkbox'
                id='disable-btn-checkbox'
                name='disable-btn-checkbox'
                onClick={toggleDisableBtn}
            />
            <label htmlFor='disable-btn-checkbox'>Disable Button</label>
        </div>
    );
}

export default App;
