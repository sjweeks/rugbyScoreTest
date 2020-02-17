import React from 'react';
import '../css/App.css';

function Header(props) {
    return (
        <div>
            <h1>{props.header}</h1>
        </div>
    )
}

export default Header