import React from 'react';

export default function TodayAppointments() {
    const appointments = [
        {
            id: 1,
            name: "Minahil Khan",
            timeRange: "10:00 AM - 12:00 PM",
            status: "pending", // pending status (orange)
            timeInfo: "2 hrs later"
        },
        {
            id: 2,
            name: "Alex Morgan",
            timeRange: "13:00 PM - 18:00 PM",
            status: "cancelled", // cancelled status (red)
            timeInfo: "1 hrs ago"
        },
        {
            id: 3,
            name: "John Doe",
            timeRange: "10:00 AM - 12:00 PM",
            status: "completed", // completed status (green)
            timeInfo: "2 hrs ago"
        },
        {
            id: 4,
            name: "David Beckham",
            timeRange: "06:00 AM - 08:00 AM",
            status: "pending", // pending status (orange)
            timeInfo: "3 hrs later"
        },
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return '✓';
            case 'cancelled':
                return '✕';
            case 'pending':
                return '🕐';
            default:
                return '🕐';
        }
    };

    return (
        <div className="appointments-card">
          
            <h2 className="appointments-title">Today Appointments</h2>

            <div className="appointments-timeline">
                <div className="timeline-line-container">
                    <div className="vertical-line"></div>
                </div>

                {appointments.map(appointment => (
                    <div key={appointment.id} className="appointment-item">


                        <div className='row'>
                            <div className='col-3'>
                                <div className="time-info-column"> 
                                    <span className="time-info">{appointment.timeInfo}</span>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className="status-column">
                                    <div className={`status-indicator ${appointment.status}`}>
                                        <span className="appointment-icon">{getStatusIcon(appointment.status)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-7'>
                                <div className="appointment-details">
                                    <h3 className="patient-name">{appointment.name}</h3>
                                    <p className="appointment-time">{appointment.timeRange}</p>
                                </div>
                            </div>
                        </div>


                      
                    </div>
                ))}
            </div>
        </div>
    );
}