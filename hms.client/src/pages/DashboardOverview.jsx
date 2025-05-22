//import StatCard from '../components/StatCard';
//import ChartCard from '../components/ChartCard';
//import ActivitiesTable from '../components/ActivitiesTable';
//import { BarChart, PieChart } from 'lucide-react';
//import RecentPatients from '../components/RecentPatients';
//import EarningReports from '../components/EarningReports';
//import TodayAppointments from '../components/TodayAppointments';


//export default function DashboardOverview() {
//    const stats = [
//        { title: 'Revenue', value: '$24,568', change: '+12%', isPositive: true, type: 'revenue' },
//        { title: 'Users', value: '12,876', change: '-8%', isPositive: false, type: 'users' },
//        { title: 'Orders', value: '10,294', change: '+12%', isPositive: true, type: 'orders' },
//        { title: 'Growth', value: '+24%', change: null, isPositive: true, type: 'growth' }
//    ];

//    const activities = [
//        { id: 1, activity: 'Payment Received', status: 'Completed', date: 'May 15, 2025', amount: '$1,200.00' },
//        { id: 2, activity: 'New User Registration', status: 'Pending', date: 'May 14, 2025', amount: '-' },
//        { id: 3, activity: 'Order Placed #45673', status: 'Processing', date: 'May 14, 2025', amount: '$350.00' },
//        { id: 4, activity: 'Refund Processed', status: 'Completed', date: 'May 13, 2025', amount: '$120.00' }
//    ];
//    return (
//        <>
//            <main className="dashboard-content">
//                <h2 className="page-title">Dashboard Overview</h2>

//                <div className="stats-grid">

//                        <StatCard />

//                </div>

//                {/*<div className="charts-grid">*/}
//                {/*    <ChartCard*/}
//                {/*        title="Revenue Analytics"*/}
//                {/*        icon={<BarChart size={48} className="chart-placeholder-icon" />}*/}
//                {/*        periodOptions={['This Month', 'Last Month', 'This Year']}*/}
//                {/*    />*/}
//                {/*    <ChartCard*/}
//                {/*        title="User Activity"*/}
//                {/*        icon={<PieChart size={48} className="chart-placeholder-icon" />}*/}
//                {/*        periodOptions={['This Week', 'Last Week', 'This Month']}*/}
//                {/*    />*/}


//                {/*</div>*/}

//                <div className='row'>
//                    <div className='col-9 '>
//                        <EarningReports />
//                        <ActivitiesTable activities={activities} />
//                    </div>
//                    <div className='col-3'>
//                        <RecentPatients />


//                        <TodayAppointments />
//                    </div>

//                </div>


//                {/*<div className="activity-grid">*/}
//                {/*    <EarningReports />*/}
//                {/*    <RecentPatients />*/}

//                {/*</div>*/}





//            </main>
//        </>
//    );
//}
import StatCard from '../components/StatCard';
import ChartCard from '../components/ChartCard';
import ActivitiesTable from '../components/ActivitiesTable';
import { BarChart, PieChart } from 'lucide-react';
import RecentPatients from '../components/RecentPatients';
import EarningReports from '../components/EarningReports';
import TodayAppointments from '../components/TodayAppointments';

export default function DashboardOverview() {
    const stats = [
        { title: 'Revenue', value: '$24,568', change: '+12%', isPositive: true, type: 'revenue' },
        { title: 'Users', value: '12,876', change: '-8%', isPositive: false, type: 'users' },
        { title: 'Orders', value: '10,294', change: '+12%', isPositive: true, type: 'orders' },
        { title: 'Growth', value: '+24%', change: null, isPositive: true, type: 'growth' }
    ];

    const activities = [
        { id: 1, activity: 'Payment Received', status: 'Completed', date: 'May 15, 2025', amount: '$1,200.00' },
        { id: 2, activity: 'New User Registration', status: 'Pending', date: 'May 14, 2025', amount: '-' },
        { id: 3, activity: 'Order Placed #45673', status: 'Processing', date: 'May 14, 2025', amount: '$350.00' },
        { id: 4, activity: 'Refund Processed', status: 'Completed', date: 'May 13, 2025', amount: '$120.00' }
    ];

    return (
        <main className="dashboard-content">
            <h2 className="mb-4">Dashboard Overview</h2>

            <div className="stats-grid">

                <StatCard />

            </div>

            <div className="row">
                <div className="col-lg-9 mb-4">
                    <EarningReports />
                    <ActivitiesTable activities={activities} />
                </div>
                <div className="col-lg-3 mb-4">
                    <RecentPatients />
                    <TodayAppointments />
                </div>
            </div>
        </main>
    );
}
