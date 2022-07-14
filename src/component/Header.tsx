import React from 'react';

function Header(props: any) {
    return (
        <header>
            <h1>Meh Fight</h1>
            <div className="Header-rack-btn">
                <button className="std-btn" onClick={props.resetGame} disabled>Reset</button>
                <button className="std-btn" disabled>Save</button>
            </div>
        </header>
    );
}

export default Header;