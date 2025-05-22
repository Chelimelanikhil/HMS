export default function ChartCard({ title, icon, periodOptions }) {
    return (
        <div className="chart-card">
            <div className="chart-header">
                <h3 className="chart-title">{title}</h3>
                <select className="chart-period-selector">
                    {periodOptions.map((option, i) => (
                        <option key={i}>{option}</option>
                    ))}
                </select>
            </div>
            <div className="chart-container">
                {icon}
                <span className="chart-placeholder-text">{title} Chart</span>
            </div>
        </div>
    );
}
