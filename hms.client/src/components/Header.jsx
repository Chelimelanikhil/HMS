import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <Search className="search-icon" size={18} />
                </div>
                <div className="user-section">
                    <div className="notification-container">
                        <Bell size={20} className="notification-icon" />
                        <span className="notification-badge">3</span>
                    </div>
                    <div className="user-profile">
                        <div className="user-avatar">JD</div>
                        <span className="user-name">John Doe</span>
                        <ChevronDown size={16} className="dropdown-icon" />
                    </div>
                </div>
            </div>
        </header>
    );
}
