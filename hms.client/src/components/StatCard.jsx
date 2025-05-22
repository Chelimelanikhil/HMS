import { useState } from 'react';
import { Users, Calendar, FileText, DollarSign } from 'lucide-react';

export default function Dashboard() {
    // Sample data
    const stats = [
        {
            title: "Total Patients",
            value: "1600+",
            change: "45.06%",
            isPositive: true,
            icon: <Users size={20} color="#4ade80" />,
            type: "patients"
        },
        {
            title: "Appointments",
            value: "130+",
            change: "25.06%",
            isPositive: false,
            icon: <Calendar size={20} color="#fbbf24" />,
            type: "appointments"
        },
        {
            title: "Prescriptions",
            value: "4160+",
            change: "65.06%",
            isPositive: true,
            icon: <FileText size={20} color="#4ade80" />,
            type: "prescriptions"
        },
        {
            title: "Total Earnings",
            value: "4590$",
            change: "45.06%",
            isPositive: false,
            icon: <DollarSign size={20} color="#ef4444" />,
            type: "earnings"
        }
    ];

    return (
        <div className="dashboard">
            <div className="stat-card-container">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        isPositive={stat.isPositive}
                        icon={stat.icon}
                        type={stat.type}
                    />
                ))}
            </div>
        </div>
    );
}

function StatCard({ title, value, change, isPositive, icon, type }) {
    // Generate sample chart data
    const generateChartData = () => {
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push(Math.floor(Math.random() * 50) + 10);
        }
        return data;
    };

    const chartData = generateChartData();

    return (
        <div className={`stat-card ${type}`}>
            <div className="stat-header">
                <div className="stat-icon">
                    {icon}
                </div>
                <h3 className="stat-title">{title}</h3>
            </div>

            <div className="stat-chart">
                {chartData.map((value, index) => (
                    <div key={index} className="chart-bar-container">
                        <div
                            className="chart-bar"
                            style={{ height: `${(value / 60) * 40}px` }}
                        />
                    </div>
                ))}
            </div>

            <div className="stat-footer">
                <h2 className="stat-value">{value}</h2>
                <div className={`stat-change ${isPositive ? "positive" : "negative"}`}>
                    {isPositive ? "↑" : "↓"} {change}
                </div>
            </div>
        </div>
    );
}