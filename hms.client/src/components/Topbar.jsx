import React from 'react';
import './Topbar.css';


const Topbar = () => {
    return (
        <div className="topbar">
            <input
                type="text"
                placeholder='Search "Patients"'
                className="search-input"
            />

            <div className="topbar-right">
                <div className="notification">
                    <span className="bell">🔔</span>
                    <span className="badge">5</span>
                </div>
                <div className="profile">
                    <img src={""} alt="Profile" />
                    <span className="name">Dr. Daudi</span>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
