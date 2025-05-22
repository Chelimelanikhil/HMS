import React from 'react';

export default function RecentPatients() {
    // Sample patient data
    const patients = [
        {
            id: 1,
            name: "Amina Smith",
            phone: "+1 908 765 432",
            time: "2:00 PM",
            avatarColor: "#ffb0c0"
        },
        {
            id: 2,
            name: "Minghli Khan",
            phone: "+1 800 123 456",
            time: "2:00 PM",
            avatarColor: "#b0dbff"
        },
        {
            id: 3,
            name: "Alex Morgan",
            phone: "+1 908 765 432",
            time: "2:00 PM",
            avatarColor: "#ffd7b0"
        },
        {
            id: 4,
            name: "John Doe",
            phone: "+1 234 567 890",
            time: "2:00 PM",
            avatarColor: "#d9b0ff"
        },
        {
            id: 5,
            name: "David Beckham",
            phone: "+1 456 789 123",
            time: "2:00 PM",
            avatarColor: "#ffb0c0"
        }
    ];

    // Function to get initials from name
    const getInitials = (name) => {
        const nameParts = name.split(' ');
        return nameParts.map(part => part[0]).join('');
    };

    return (
        <div className="recent-patients-card">
            <h2 className="recent-patients-title">Recent Patients</h2>
            <div className="patient-list">
                {patients.map(patient => (
                    <div key={patient.id} className="patient-item">

                        <div className='row'>
                            <div className='col-2'>
                                <div className="patient-avatar" style={{ backgroundColor: patient.avatarColor }}>
                                    <div className="patient-initials">{getInitials(patient.name)}</div>
                                </div>
                            </div>
                            <div className='col-7'>
                                <div className="patient-details">
                                    <h3 className="patient-name">{patient.name}</h3>
                                    <p className="patient-phone">{patient.phone}</p>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className="patient-time">{patient.time}</div>
                            </div>             
                        </div>

                       
                    </div>
                ))}
            </div>
        </div>
    );
}

//import React from 'react';

//export default function RecentPatients() {
//    // Sample patient data
//    const patients = [
//        {
//            id: 1,
//            name: "Amina Smith",
//            phone: "+1 908 765 432",
//            time: "2:00 PM",
//            avatarColor: "#ffb0c0"
//        },
//        {
//            id: 2,
//            name: "Minghli Khan",
//            phone: "+1 800 123 456",
//            time: "2:00 PM",
//            avatarColor: "#b0dbff"
//        },
//        {
//            id: 3,
//            name: "Alex Morgan",
//            phone: "+1 908 765 432",
//            time: "2:00 PM",
//            avatarColor: "#ffd7b0"
//        },
//        {
//            id: 4,
//            name: "John Doe",
//            phone: "+1 234 567 890",
//            time: "2:00 PM",
//            avatarColor: "#d9b0ff"
//        },
//        {
//            id: 5,
//            name: "David Beckham",
//            phone: "+1 456 789 123",
//            time: "2:00 PM",
//            avatarColor: "#ffb0c0"
//        }
//    ];

//    // Function to get initials from name
//    const getInitials = (name) => {
//        const nameParts = name.split(' ');
//        return nameParts.map(part => part[0]).join('');
//    };

//    return (
//        <div className="recent-patients-card">
//            <h2 className="recent-patients-title">Recent Patients</h2>
//            <div className="patient-list">
//                {patients.map(patient => (
//                    <div key={patient.id} className="patient-item">
//                        <div className="patient-info">
//                            <div className="patient-avatar" style={{ backgroundColor: patient.avatarColor }}>
//                                <div className="patient-initials">{getInitials(patient.name)}</div>
//                            </div>
//                            <div className="patient-details">
//                                <h3 className="patient-name">{patient.name}</h3>
//                                <p className="patient-phone">{patient.phone}</p>
//                            </div>
//                        </div>
//                        <div className="patient-time">{patient.time}</div>
//                    </div>
//                ))}
//            </div>
//        </div>
//    );
//}