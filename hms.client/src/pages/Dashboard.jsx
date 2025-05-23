import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardOverview from '../pages/DashboardOverview';
import Analytics from '../pages/Analytics';
import Teams from '../pages/Teams';
import Documents from '../pages/Documents';
import SettingsPage from '../pages/SettingsPage';


export default function Dashboard() {
    const [activeNav, setActiveNav] = useState('Dashboard');

    return (
        <div className="dashboard-container">,
            <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
            <div className="main-content">
                <Header />              
                <main className="dashboard-content">
                    {activeNav === 'Dashboard' && <DashboardOverview />}
                    {activeNav === 'Analytics' && <Analytics />}
                    {activeNav === 'Teams' && <Teams />}
                    {activeNav === 'Documents' && <Documents />}
                    {activeNav === 'Settings' && <SettingsPage />}
                </main>
            </div>
        </div>
    );
}
