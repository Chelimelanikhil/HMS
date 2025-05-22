import { useState } from 'react';

export default function TransactionTable() {
    const [totalAmount, setTotalAmount] = useState(27000);

    const transactions = [
        {
            id: 1,
            patient: {
                name: "Hugo Lloris",
                phone: "+1 234 567 890",
                avatar: "/api/placeholder/40/40"
            },
            date: "Mar 12, 2022",
            status: "Paid",
            amount: 1000,
            method: "Cash"
        },
        {
            id: 2,
            patient: {
                name: "Mauris auctor",
                phone: "+1 456 789 123",
                avatar: "/api/placeholder/40/40"
            },
            date: "Agus 12, 2023",
            status: "Paid",
            amount: 2300,
            method: "NHCF"
        },
        {
            id: 3,
            patient: {
                name: "Michael Owen",
                phone: "+1 890 123 456",
                avatar: "/api/placeholder/40/40"
            },
            date: "Jan 06, 2024",
            status: "Pending",
            amount: 1200,
            method: "Britam"
        },
        {
            id: 4,
            patient: {
                name: "Amina Smith",
                phone: "+1 908 765 432",
                avatar: "/api/placeholder/40/40"
            },
            date: "Feb 18, 2025",
            status: "Cancel",
            amount: 1400,
            method: "NHCF"
        },
        {
            id: 5,
            patient: {
                name: "Minahil Khan",
                phone: "+1 890 123 456",
                avatar: "/api/placeholder/40/40"
            },
            date: "Mar 12, 2026",
            status: "Pending",
            amount: 1230,
            method: "Cash"
        }
    ];

    return (
        <div className="transaction-card">
            <div className="transaction-header">
                <h2 className="transaction-title">Recent Transaction</h2>
                <div className="transaction-amount">
                    <span>{totalAmount}$</span>
                    <span className="today-label">Today</span>
                </div>
            </div>

            <div className="transaction-table-container">
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Patient</th>
                            <th>
                                Date
                              
                            </th>
                            <th>Status</th>
                            <th>Amount (Tsh)</th>
                            <th>Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>
                                    <div className="patient-info">
                                        <div className="patient-avatar">
                                            <img src={transaction.patient.avatar} alt="" />
                                        </div>
                                        <div className="patient-details">
                                            <div className="patient-name">{transaction.patient.name}</div>
                                            <div className="patient-phone">{transaction.patient.phone}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{transaction.date}</td>
                                <td>
                                    <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                                        {transaction.status}
                                    </span>
                                </td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.method}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}