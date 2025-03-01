import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './leftbar.css'; // Ensure this imports your CSS

const Leftbar = () => {
    const [select, setSelect] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleButton = (i, path) => {
        setSelect(i);
        navigate(path);
    };

    return (
        <div className="left-bar d-flex flex-column flex-shrink-0 bg-light" style={{ width: '4.5rem' }}>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item" role="button" onClick={() => toggleButton(0, '/')}>
                    <a href="/" className={`nav-link py-3 border-bottom opacity-75 ${location.pathname === '/' ? "active-custom" : ""}`}>
                        <i className="bi bi-house"></i>
                    </a>
                </li>
                <li className="nav-item" role="button" onClick={() => toggleButton(1, '/course')}>
                    <a href="/course" className={`nav-link py-3 border-bottom opacity-75 ${location.pathname === '/course' ? "active-custom" : ""}`}>
                        <i className="bi bi-book"></i>
                    </a>
                </li>
                <li className="nav-item" role="button" onClick={() => toggleButton(2, '/article')}>
                    <a href="/article" className={`nav-link py-3 border-bottom opacity-75 ${location.pathname === '/article' ? "active-custom" : ""}`}>
                        <i className="bi bi-chat"></i>
                    </a>
                </li>
                <li className="nav-item" role="button" onClick={() => toggleButton(3, '/about-us')}>
                    <a href="/about-us" className={`nav-link py-3 border-bottom opacity-75 ${location.pathname === '/about-us' ? "active-custom" : ""}`}>
                        <i className="bi bi-info-circle"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Leftbar;
