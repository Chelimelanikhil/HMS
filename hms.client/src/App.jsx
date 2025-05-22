import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import DashboardOverview from '../src/pages/DashboardOverview';
import Analytics from '../src/pages/Analytics';
import Teams from '../src/pages/Teams';
import Documents from '../src/pages/Documents';
import SettingsPage from '../src/pages/SettingsPage';

export default function Dashboard() {
    return (
        <Router>
            <div className="dashboard-container">
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <main className="dashboard-content">
                        <Routes>
                            <Route path="/" element={<DashboardOverview />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/teams" element={<Teams />} />
                            <Route path="/documents" element={<Documents />} />
                            <Route path="/settings" element={<SettingsPage />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}
