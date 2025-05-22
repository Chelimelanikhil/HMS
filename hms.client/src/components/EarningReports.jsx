import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';

export default function EarningsReportChart() {
    // CSS styles
    const styles = {
        chartContainer: {
            width: '100%',
            padding: '16px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            height: '350px',
            marginBottom:'10px'
        },
        chartHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
        },
        chartTitle: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#1F2937',
            margin: '0'
        },
        chartMetrics: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        currentValue: {
            fontSize: '18px',
            fontWeight: 'bold'
        },
        changeValue: {
            padding: '4px 8px',
            fontSize: '12px',
            fontWeight: '500',
            borderRadius: '4px'
        },
        positive: {
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            color: '#10B981'
        },
        chartWrapper: {
            height: '256px'
        }
    };

    // Sample data representing the earnings report values from Jan to Dec
    const data = [
        { name: 'Jan', value: 3.2 },
        { name: 'Feb', value: 4.0 },
        { name: 'Mar', value: 2.4 },
        { name: 'Apr', value: 5.1 },
        { name: 'May', value: 5.0 },
        { name: 'Jun', value: 2.1 },
        { name: 'Jul', value: 7.2 },
        { name: 'Aug', value: 6.0 },
        { name: 'Sep', value: 4.3 },
        { name: 'Oct', value: 6.2 },
        { name: 'Nov', value: 4.1 },
        { name: 'Dec', value: 2.0 },
    ];

    return (
        <div style={styles.chartContainer}>
            <div style={styles.chartHeader}>
                <h2 style={styles.chartTitle}>Earning Reports</h2>
                <div style={styles.chartMetrics}>
                    <span style={styles.currentValue}>5.44%</span>
                    <span style={{ ...styles.changeValue, ...styles.positive }}>+2.4%</span>
                </div>
            </div>

            <div style={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        />
                        <YAxis
                            domain={[0, 8]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            tickFormatter={(tick) => `${tick}%`}
                        />
                        <Tooltip
                            formatter={(value) => [`${value}%`, 'Value']}
                            contentStyle={{
                                borderRadius: '6px',
                                border: 'none',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#10B981"
                            strokeWidth={2.5}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#10B981"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                                r: 6,
                                stroke: '#10B981',
                                strokeWidth: 2,
                                fill: 'white'
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}