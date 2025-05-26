import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import DashboardOverview from '../src/pages/DashboardOverview';
import Patients from '../src/pages/Patients';
import Doctors from '../src/pages/Doctors';
import Appointments from '../src/pages/Appointments';
import SettingsPage from '../src/pages/SettingsPage';
import Payments from '../src/pages/Payments';
import AuthPages from '../src/pages/Login';


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
                            <Route path="/login" element={<AuthPages />} />
                            <Route path="/patients" element={<Patients />} />
                            <Route path="/doctors" element={<Doctors />} />
                            <Route path="/appointments" element={<Appointments />} />
                            <Route path="/payments" element={<Payments />} />
                            <Route path="/settings" element={<SettingsPage />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}
