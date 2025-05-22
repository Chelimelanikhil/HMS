import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, BarChart, Users, FileText, Settings, LogOut, PieChart } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';

const navItems = [
    { name: 'Dashboard', icon: <Home size={20} />, path: '/' },
    { name: 'Analytics', icon: <BarChart size={20} />, path: '/analytics' },
    { name: 'Teams', icon: <Users size={20} />, path: '/teams' },
    { name: 'Documents', icon: <FileText size={20} />, path: '/documents' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' }
];

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);

    // Collapse sidebar on small screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
            <div className="logo-container">
                <h1 className="logo">
                    <PieChart
                        className="logo-icon"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ cursor: 'pointer' }}
                    />
                    {isOpen && (
                        <>
                            <span className="logo-text-primary">Dash</span>
                            <span className="logo-text-secondary">Board</span>
                        </>
                    )}
                </h1>
            </div>

            <nav className="nav-menu">
                {navItems.map((item) => (
                    <Tooltip.Provider key={item.name}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <div
                                    className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                                    onClick={() => navigate(item.path)}
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    {isOpen && <span className="nav-text">{item.name}</span>}
                                </div>
                            </Tooltip.Trigger>
                            {!isOpen && (
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={5}
                                    className="tooltip-content"
                                >
                                    {item.name}
                                </Tooltip.Content>
                            )}
                        </Tooltip.Root>
                    </Tooltip.Provider>
                ))}
            </nav>

            <div className="logout-container">
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            <div className="logout-button">
                                <LogOut size={20} className="logout-icon" />
                                {isOpen && <span>Logout</span>}
                            </div>
                        </Tooltip.Trigger>
                        {!isOpen && (
                            <Tooltip.Content
                                side="right"
                                sideOffset={5}
                                className="tooltip-content"
                            >
                                Logout
                            </Tooltip.Content>
                        )}
                    </Tooltip.Root>
                </Tooltip.Provider>
            </div>
        </div>
    );
}
